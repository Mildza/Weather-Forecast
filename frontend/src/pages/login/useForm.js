import { useState, useEffect, useCallback } from "react";

const useForm = validate => {
  const [values, setValues] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    touched: false
  });
  const [formValid, setFormValid] = useState(false);
  //   validate(values, errors);

  const handleChange = event => {
    const { name, value } = event.target;
    setValues(values => {
      return {
        ...values,
        [name]: value
      };
    });
  };

  const validateForm = useCallback(errors => {
    if (
      errors.dirty &&
      errors.username.trim().length === 0 &&
      errors.password.trim().length === 0
    ) {
      setFormValid(true);
    } else setFormValid(false);
  }, []);

  useEffect(() => {
    setErrors(validate(values, errors));
    validateForm(errors);
  }, [values, errors, validate, validateForm]);

  return { handleChange, values, errors, formValid };
};

export default useForm;
