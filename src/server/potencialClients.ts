import { FormValues } from "@/components/custom/Form/ContactUsForm";
import { env } from "@/lib/env";
import axios from "axios";

export const postPotencialClient = async (payload : FormValues) => {
  try {
    const response = await axios.post(`${env.API_URL}/potencialclients`, payload);
    return response.status;
  } catch (err ) {
    console.log('failed to post message!', err);
  }
  
}