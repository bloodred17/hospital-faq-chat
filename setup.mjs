import { writeFile } from 'fs';
import dotenv from "dotenv"

dotenv.config()


const targetPath = `./src/environments/environment.build.ts`;
const envConfigFile = `
export const environment = {
  production: true,
  api: "${process.env.MODEL_SHOWCASE_API}",
};
`
writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
  console.log(`API: ${process.env.MODEL_SHOWCASE_API}`);
});
