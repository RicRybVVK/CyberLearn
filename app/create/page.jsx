"use client"
import React, { useState } from 'react'
import SelectOption from './_components/SelectOption'
import { Button } from '@/components/ui/button';
import TopicInput from './_components/TopicInput';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

function Create() {
    const [step,setStep] = useState(0);
    const [formData,setFormData] = useState([]);
    const { user } = useUser();
    const [loading,setLoading] = useState(false);
    const router = useRouter();

    const handleUserInput = (fieldName, fieldValue) => {
        setFormData(prev => ({
            ...prev,
            [fieldName]: fieldValue
        }))
        console.log(formData);
    }

    const GenerateCourseOutline = async () => {
      const courseId = uuidv4();
      setLoading(true);
      const result = await axios.post('/api/generate-course-outline', {
        courseId: courseId,
        ...formData,
        createdBy: user?.primaryEmailAddress?.emailAddress
      });
      setLoading(false);
      router.replace('/dashboard');
      toast("Your course content is generating, Click on Refresh Button")
      console.log(result.data.result.resp);
    }

  return (
    <div className='flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20'>
        <h2 className='font-bold text-4xl text-black'>Build Your Interactive Cybersecurity Training Program</h2>
        <p className='text-gray-500 text-lg'>Provide the necessary details to generate interactive cybersecurity training material for employees</p>

        <div className='mt-10'>
          {step === 0 ?  
            <SelectOption selectedStudyType={(value) => handleUserInput('courseType', value)} />
          : 
            <TopicInput 
              setTopic={(value) => handleUserInput('topic', value)} 
              setDifficultyLevel={(value) => handleUserInput('difficultyLevel', value)}
            /> 
          }
        </div>

        <div className='flex justify-between w-full mt-32'>
           {/* Changed '-' to Return button */}
           {step !== 0 ? 
             <Button 
               className="bg-black text-white hover:bg-gray-800" 
               onClick={() => setStep(step - 1)}
             >
               Previous
             </Button> 
             : (
               <Button 
                 className="bg-black text-white hover:bg-gray-800"
                 onClick={() => router.push('/dashboard')}
               >
                 Return
               </Button>
             )
           }
            {step === 0 ? 
              <Button 
                onClick={() => setStep(step + 1)}
                className="bg-black text-white hover:bg-gray-800"
              >
                Next
              </Button> :
              <Button 
                onClick={GenerateCourseOutline} 
                disabled={loading}
                className="bg-black text-white hover:bg-gray-800"
              >
                {loading ? <Loader className='animate-spin' /> : 'Generate'}
              </Button>
            }
        </div>
    </div>
  )
}

export default Create