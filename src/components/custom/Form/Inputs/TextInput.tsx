import { UseFormReturn , FieldValues, Path } from "react-hook-form";

import { FormField, FormLabel, FormMessage, FormControl, FormItem } from "@/components/ui/form"


interface TextInputProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
}

const TextInput = <T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
}: TextInputProps<T>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="min-w-0">
          <FormLabel>{label}</FormLabel>
          <FormControl className="min-w-0">
            <input
              className="border p-2 rounded-md min-w-0"
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextInput;