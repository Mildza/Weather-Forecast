export default function validate(values, errors) {
  if (values.username.trim().length > 0 || values.password.trim().length > 0) {
    errors.dirty = true;
  }
  if (values.username.trim().length === 0) {
    errors.username = "Username is required";
  } else if (values.username.trim().length < 6) {
    errors.username = "Username must be more than 6 characters";
  } else if (values.username.trim().length > 100) {
    errors.username = "Username must be less than 100 characters";
  } else {
    errors.username = "";
  }
  if (values.password.trim().length === 0) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be more than 6 characters";
  } else {
    errors.password = "";
  }
  return errors;
}
