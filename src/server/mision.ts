import { env } from "@/lib/env";
import axios from "axios";

export const mision = async (lang : string) => {
    const res = axios.get(`${env.API_URL}/mision/${lang}`)
    .then((res)=> {return res.data})

    return res;
}