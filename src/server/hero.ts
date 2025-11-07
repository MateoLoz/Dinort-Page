import { env } from "@/lib/env";
import axios from "axios";

export const getHero = async () => {

   const res = await axios.get(`${env.API_URL}/hero/`).then((res)=> {return res.data});

   return res;
}