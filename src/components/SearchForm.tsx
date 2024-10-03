import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { object, string } from "yup";

const searchSchema = object({
  searchValue: string().required(),
});

export const SearchForm = () => {
  const [validationError, setValidationError] = useState<string | null>(null);
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValidationError(null);
    searchSchema.validate(data).catch((err) => {
      console.log(err.errors);
      setValidationError(err.errors[0]);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Search Users"
        {...register("searchValue")}
        error={!!validationError}
        helperText={validationError}
      />

      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;
