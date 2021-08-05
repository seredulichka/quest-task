import React from "react";

import { Typography, TextField, Button } from "@material-ui/core/";

const FormLogin = ({
  formData,
  step,
  error,
  fieldErrors,
  handleFieldsChange,
  handleStepChange,
  handleRequire,
}) => {
  const { login } = formData;
  return (
    <div>
      <Typography component="h2" variant="h5">
        Step {step}
      </Typography>
      {error && (
        <Typography component="h3" variant="h6" color="error">
          This login is already in use please choose another
        </Typography>
      )}

      <form onSubmit={handleStepChange}>
        <TextField
          error={fieldErrors.login ? true : false}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="login"
          label="Login"
          value={login}
          onChange={handleFieldsChange}
          helperText={fieldErrors.login}
        />
        <Button
          disabled={!login.length || handleRequire()}
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          label="submit"
        >
          Next step
        </Button>
      </form>
    </div>
  );
};

export default FormLogin;
