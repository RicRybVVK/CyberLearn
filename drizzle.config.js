import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:{
    url:'postgresql://CyberLearn_owner:npg_LI1qbCEQ6HoO@ep-shiny-math-a284eevr-pooler.eu-central-1.aws.neon.tech/Cyber%20Learning%20Platform?sslmode=require'
  }
});
