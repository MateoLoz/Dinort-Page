import { env } from "@/lib/env";
import axios from "axios";

export default async function tags( lang :string ) {
    const response = await axios.get(`${env.API_URL}/tags/${lang}`).then((res)=> {return res.data});
    console.log(response);
    return response;
}