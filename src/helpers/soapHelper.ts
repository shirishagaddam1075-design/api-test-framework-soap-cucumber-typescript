import axios from "axios";
import { getToken } from "./tokenManager";

export async function callSoapAPI(xml:string, action:string){
    const token = await getToken();

    const response = await axios.post(process.env.SOAP_URL!, xml, {
        headers:{
            "Content-Type": "text/xml",
            Authorization: `Bearer ${token}`,
            SOAPACTION: action,

        },
    });
    return response.data;
}