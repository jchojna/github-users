import { TextField } from "@mui/material";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { object, string } from "yup";

import { CONSTS } from "../utils/constants";

const ghUsernameRegex = /^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*$/;
const searchSchema = object({
  searchValue: string()
    .required(CONSTS.error.emptyUsername)
    .matches(ghUsernameRegex, CONSTS.error.invalidUsername),
});

type SearchFormProps = {
  onSearchChange: () => void;
  onSearchSubmit: (searchValue: string) => void;
};

export const SearchForm = forwardRef(
  ({ onSearchChange, onSearchSubmit }: SearchFormProps, ref) => {
    const [validationError, setValidationError] = useState<string | null>(null);
    const { register, handleSubmit, watch } = useForm();

    const searchValue = watch("searchValue");

    useImperativeHandle(ref, () => {
      return {
        trigger: handleSubmit(onSubmit),
      };
    });

    useEffect(() => {
      onSearchChange();
    }, [searchValue]); // eslint-disable-line react-hooks/exhaustive-deps

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
      searchSchema
        .validate(data)
        .then(() => {
          onSearchSubmit(data.searchValue);
          setValidationError(null);
        })
        .catch((err) => {
          onSearchSubmit("");
          setValidationError(err.errors[0]);
        });
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          sx={{ mt: "30px" }}
          label={CONSTS.label.searchInput}
          error={!!validationError}
          helperText={validationError}
          {...register("searchValue")}
        />
      </form>
    );
  },
);

export default SearchForm;
