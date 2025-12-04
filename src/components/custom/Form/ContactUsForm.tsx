"use client";
import { motion } from "motion/react";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useState } from "react";
import { postPotencialClient } from "@/server/potencialClients";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


const heardSources = z.enum([
    "LinkedIn",
    "Instagram",
    "WhatsApp",
    "Chat-Gpt",
    "Web",
    "Otro",
  ])
  

const formSchema = z.object({
    firstName: z.string().min(2, {message:'El nombre debe contener al menos 2 caracteres.'}),
    lastName: z.string().min(2 , {message:'El apellido debe contener al menos 2 caracteres.'}),
    email: z.email({message:'El email es un campo requerido.'}),
    phoneNumber: z.string().min(12).max(15, {message:'el numero debe tener 15 caracteres maximo.'}),
    description: z.string().min(5).max(300 , {message:'el mensaje debe contener 300 caracteres maximo.'}),
    howHeard: heardSources,
    Organization: z.string().min(2, {message:'La organizacion debe contener al menos 2 caracteres.'})
})


export type FormValues = z.infer<typeof formSchema>;

export const ContactUsForm = () => {

    const [btn,setBtnValue] = useState('Enviar')

    const form = useForm<FormValues>(
        {
        resolver: zodResolver(formSchema),
        defaultValues:{
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        description: "",
        howHeard: "Otro",
        Organization:""
        }
    })

    const onSubmit = async (values:FormValues) => {
        
        setBtnValue('Enviando..');
        
        const response = await postPotencialClient(values);
         console.log(response);
        if(response == 201) {
         setBtnValue('Enviado con Exito!');
          form.reset();
        
        }
         if(response != 201) {
            setBtnValue('Error algo salio mal!');
          }
      
       }

    return(
        <div className=" w-full flex flex-col justify-center items-center">
               <Form  {...form}>
         <motion.form 
         initial={{y:"20%", opacity:0}}
         animate={{y:0, opacity:1, transition:{duration:0.85, ease:"easeInOut"}}}
         className="w-[90vw] md:w-[65vw] lg:w-[55vw] xl:w-[45vw]  lg:px-12 md:px-0  relative top-[-60px] flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}
         >
            <section className="z-10 flex flex-col sm:flex-row md:gap-4 gap-2">
            <FormField  control={form.control} name="firstName" render={({field})=> (
            <FormItem>
                <FormLabel className="font-main font-light text-white ml-4">Nombre</FormLabel>
                 <FormControl>
                    <input className="md:p-4 p-3 rounded-md bg-gray-4 w-full" type="text" placeholder="Nombre" {...field}/>
                 </FormControl>
                 <FormMessage></FormMessage>
            </FormItem>
           )}
           />
      
        <FormField control={form.control} name="lastName" render={({field})=> (
            <FormItem>
                <FormLabel className="font-main font-light  md:text-white text-black ml-4">Apellido</FormLabel>
                 <FormControl>
                    <input className="md:p-4 p-3 rounded-md bg-gray-4 min-w-22" type="text" placeholder="Apellido" {...field}/>
                 </FormControl>
                 <FormMessage></FormMessage>
            </FormItem>
           )}
           />
        </section>

      <section className="w-full">
      <FormField control={form.control} name="Organization" render={({field})=> (
            <FormItem>
            <FormLabel className="font-main font-light  text-black ml-4">Organizacion</FormLabel>
                 <FormControl>
                    <input className="md:p-4 p-3  rounded-md bg-gray-4" type="text" placeholder="Organization" {...field}/>
                 </FormControl>
                 <FormMessage></FormMessage>
            </FormItem>
           )}
           />
      </section>

       
            <section className="z-10 flex flex-col sm:flex-row md:gap-4 gap-2 w-full">
            <FormField control={form.control} name="email" render={({field})=> (
            <FormItem>
                <FormLabel className="font-main font-light text-black ml-4">Email</FormLabel>
                 <FormControl>
                    <input className="md:p-4 p-3 rounded-md bg-gray-4 min-w-22" type="text" placeholder="Email" {...field}/>
                 </FormControl>
                 <FormMessage></FormMessage>
            </FormItem>
           )}
           />

        <FormField control={form.control} name="phoneNumber" render={({field})=> (
            <FormItem>
                <FormLabel className="font-main font-light text-black ml-4">Numero</FormLabel>
                 <FormControl>
                 <PhoneInput
                className="md:p-4 p-3 bg-gray-4 rounded-md w-full"
                  placeholder="(000) 000"
                  {...field}
                      />
                 </FormControl>
                 <FormMessage></FormMessage>
            </FormItem>
           )}
           />
        </section>

        <FormField control={form.control} name="description" render={({field})=> (
            <FormItem>
                <FormLabel className="font-main font-light text-black ml-4">Message</FormLabel>
                 <FormControl>
                    <textarea className="md:p-4 p-3 rounded-md bg-gray-4 h-40 resize-none"  placeholder="¿ Como podemos ayudar ?" {...field}/>
                 </FormControl>
                 <FormMessage></FormMessage>
            </FormItem>
           )}
           />

           <FormField control={form.control} name="howHeard" render={({field})=> (
            <FormItem>
                <FormLabel className="font-main font-light text-black ml-4">¿Dónde nos escuchaste?</FormLabel>
                 <FormControl>
                   <select {...field} className="md:p-4 p-3 rounded-md bg-gray-4"  name="" id="">
                    <option value={""} >Seleccionar una opcion</option>
                    {heardSources.options.map((option)=>(
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                   </select>
                 </FormControl>
                 <FormMessage></FormMessage>
            </FormItem>
           )}
           />
           <section className="w-full flex justify-center items-center">
           <button 
            className="bg-blue-1 text-white font-main fomt-medium text-md w-40 md:p-4 p-3 rounded-lg hover:scale-[1.02] transition"
           type="submit"
           style={{background: form.formState.isSubmitting ? 'lightblue' : '' }}
           disabled={form.formState.isSubmitting}
           >{btn}</button>
           </section>

         </motion.form>
        </Form>
        </div>
    )

}