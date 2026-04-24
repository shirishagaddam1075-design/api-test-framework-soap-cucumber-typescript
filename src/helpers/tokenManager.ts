import axios from "axios";
import * as dotenv from "dotenv";


dotenv.config();

let token:string | null = null;

export async function getToken(): Promise<string> {
 if(token) return token;

 const response = await axios.post(
    `https:login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/token`,
    new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.CLIENT_ID!,
        client_secret: process.env.CLIENT_SECRET!,
        resource: process.env.RESOURCE_URL!,
    })
 );

 token = response.data.access_token;
 if(!token){
    throw new Error("Failed to generate token");
 }
 return token;
}


