import axios from "axios";

export const getHero = async () => {
   const res = await axios.get('http://localhost:3035/api/hero/').then((res)=> {return res.data});
   return res;
}