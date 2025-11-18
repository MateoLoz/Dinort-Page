import { env } from "@/lib/env";
import axios from "axios";


export async function postCandidates  (payload : FormData) {
    try {
      const response = await axios.post(`${env.API_URL}/candidates/`, payload);
       
     return response.status;
     
    } catch (err) {
        console.log('failed to post candidate', err)
    }
}