import { env } from "@/lib/env";
import axios from "axios";

export const about = async (lang : string) => {
    const res = axios.get(`${env.API_URL}/about/${lang}`)
    .then((res)=> {return res.data})

    return res;
}