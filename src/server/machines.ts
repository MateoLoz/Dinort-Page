import { env } from "@/lib/env";
import axios from "axios";

export default async function getMachines (lang:string) {
    try {

        const { data } = await axios.get(`${env.API_URL}/machines/${lang}`).then((res)=> {return res});

        if(!data) throw new Error();
    
        return data;
    
    } catch (err) {
        console.log('failed to fetch machines!',err);
    }
   
}