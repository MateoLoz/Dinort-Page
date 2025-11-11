"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

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
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      coverLetter: "",
    },
  });

  console.log(form);

  const onSubmit = (values: FormValues) => {
    console.log("Formulario enviado ✅", values);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex justify-center">
          <DialogTitle>Unirse a Dinort</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            className="flex flex-row gap-4 my-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            ,
            <section className="flex flex-col gap-4">
              {/* Nombre */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <input
                        className="border p-2 rounded-md relative "
                        placeholder="Juan"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage></FormMessage>
                  </FormItem>
                )}
              />
              {/* Apellido */}
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apellido</FormLabel>
                    <FormControl>
                      <input
                        className="border p-2 rounded-md"
                        placeholder="Pérez"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage></FormMessage>
                  </FormItem>
                )}
              />
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <input
                        className="border p-2 rounded-md"
                        placeholder="correo@ejemplo.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage></FormMessage>
                  </FormItem>
                )}
              />
            </section>
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
                    <span
                      style={{
                        color:
                          Number(`${field.value?.length}`) <= 250
                            ? "darkgreen"
                            : "red",
                      }}
                      className="absolute mt-38 right-8"
                    >
                      {field.value?.length} / 250
                    </span>
                  </FormItem>
                )}
              />
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
              >
                Enviar
              </button>
            </section>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
