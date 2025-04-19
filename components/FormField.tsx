import React from 'react'
import { Controller, FieldValues, Path, Control } from 'react-hook-form'
import {
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
  

interface FormFieldProps<t extends FieldValues> {
    control: Control<t>;
    name: Path<t>;
    label: string;
    placeholder: string;
    type? : "text" | "email" | "password" | "file" ;
}

const FormField = <T extends FieldValues>({
    control,
    name,
    label,
    placeholder,
    type = "text",
  }: FormFieldProps<T>) => {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="label">{label}</FormLabel>
            <FormControl>
              <Input
                className="input"
                type={type}
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
  

export default FormField
