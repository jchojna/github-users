import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { object, string } from "yup";

const searchSchema = object({
  searchValue: string().required(),
});

type SearchFormProps = {
  onUpdate: (searchValue: string) => void;
};

export const SearchForm = ({ onUpdate }: SearchFormProps) => {
  const [validationError, setValidationError] = useState<string | null>(null);
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    searchSchema
      .validate(data)
      .then(() => {
        onUpdate(data.searchValue);
        setValidationError(null);
      })
      .catch((err) => {
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
