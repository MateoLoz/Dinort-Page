"use client";

import { useForm } from "react-hook-form";
import { string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import CarouselForm from "../Carousel/CarouselForm";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
import { CarouselItem } from "@/components/ui/carousel";
import TextInput from "./Inputs/TextInput";
import { postCandidates } from "@/server/candidates";
import { useState } from "react";


const sourceEnum = z.enum([
  "LinkedIn",
  "Instagram",
  "WhatsApp",
  "Chat-Gpt",
  "Web",
  "Otro",
]);

const formSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "El nombre debe contener al menos 2 caracteres." }),
  lastName: z
    .string()
    .min(3, { message: "El apellido debe contener al menos 2 caracteres." }),
  email: z.string().email("Debe ser un email válido."),
  coverLetter: z
    .string()
    .max(250)
    .optional()
    .refine(
      (val) => !val || val.length >= 10,
      "Debe tener al menos 10 caracteres si se ingresa"
    ),
  Curriculum: z
    .instanceof(File)
    .refine((file) => file.size >= 10_000, "El archivo es demasiado pequeño.")
    .refine(
      (file) => file.size <= 2_400_000,
      "El archivo no puede superar 2MB."
    )
    .refine(
      (file) =>
        [
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "application/pdf",
        ].includes(file.type),
      "Formato no válido (solo .docx o .pdf)"
    ),
  heardFrom: sourceEnum,
});

type FormValues = z.infer<typeof formSchema>;

interface JoinUsFormProps {
  children: React.ReactNode;
}

export const JoinUsForm = ({ children }: JoinUsFormProps) => {

  const [btn,setBtn] = useState('Enviar');

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      coverLetter: "",
    },
   }
);

  const onSubmit = async (values: FormValues) => {

    setBtn('Enviando..');

   const formData = new FormData();
   formData.append('firstName',values.firstName);
   formData.append('lastName',values.lastName);
   formData.append('email',values.email);
   formData.append('heardFrom', values.heardFrom);
   formData.append('cv', values.Curriculum);
  if(values.coverLetter) formData.append('coverLetter', values.coverLetter)
  const response = await postCandidates(formData);
  if(response == 201) {
    setBtn('Enviado con exito!');
    form.reset();
    form.resetField("Curriculum");
    form.resetField("heardFrom");
  }
  if(response != 201) {
    setBtn('Error algo salio mal!');
  }

  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="md:p-4 p-2 w-full">
        <DialogHeader className="flex justify-center items-center">
          <DialogTitle>Unirse a Dinort</DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form
            className="flex flex-row gap-4 mx-auto max-w-xs"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <CarouselForm>
            <CarouselItem>
            <section className="flex flex-col gap-4 p-2">
              {/* Nombre */}
              <TextInput form={form} name="firstName" label="Nombre" placeholder="Juan"/>
              {/* Apellido */}
              <TextInput form={form} name="lastName" label="Apellido" placeholder="Perez"/>
              {/* Email */}
              <TextInput form={form} name="email" label="Email" placeholder="correo@ejemplo.com"/>

              <FormField
                control={form.control}
                name="heardFrom"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>¿Dónde nos escuchaste?</FormLabel>
                    <FormControl>
                      <select {...field} className="border p-2 rounded-md">
                        <option value="">Selecciona una opción</option>
                        {sourceEnum.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </section>
            </CarouselItem>
            ,
            <CarouselItem>
            <section className="flex flex-col gap-4">
              {/* Carta de presentación */}
              <FormField
                control={form.control}
                name="coverLetter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Carta de presentación (opcional)</FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-40 rounded-md resize-none"
                        placeholder="Escribir carta..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage></FormMessage>
                  </FormItem>
                )}
              />
              {/* Curriculum */}
              <FormField
                control={form.control}
                name="Curriculum"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Currículum</FormLabel>
                    <FormControl>
                      <input
                        type="file"
                        className="border p-2 rounded-md overflow overflow-auto"
                        placeholder="Ingresar Cv"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) field.onChange(file);
                        }}
                      />
                    </FormControl>
                    <FormMessage></FormMessage>
                  </FormItem>
                )}
              />

              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded-md"
                style={{background: form.formState.isSubmitting ? 'lightblue' : '' }}
                disabled={form.formState.isSubmitting}
              >
               {btn}
              </button>
            </section>
            </CarouselItem>
            
            </CarouselForm>

          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
