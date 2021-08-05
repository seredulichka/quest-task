import React from "react";

import { Typography, TextField, Button } from "@material-ui/core/";

const FormPersonDetails = ({
  formData,
  step,
  handleFieldsChange,
  fieldErrors,
  handleStepChange,
  handleRequire,
}) => {
  const { name, email, phone, companyName, companyAddress } = formData;
  return (
    <div className="loginBox">
      <Typography component="h1" variant="h5">
        Step {step}
      </Typography>

      <form onSubmit={handleStepChange}>
        <TextField
          error={fieldErrors.name ? true : false}
          variant="outlined"
          margin="normal"
          autoFocus
          fullWidth
          name="name"
          label="Name"
          value={name}
          onChange={handleFieldsChange}
          helperText={fieldErrors.name}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="email"
          label="Email"
          value={email}
          onChange={handleFieldsChange}
        />

        <TextField
          error={fieldErrors.phone ? true : false}
          variant="outlined"
          margin="normal"
          fullWidth
          name="phone"
          label="Phone"
          value={phone}
          onChange={handleFieldsChange}
          helperText={fieldErrors.phone}
        />
        <TextField
          error={fieldErrors.companyName ? true : false}
          variant="outlined"
          margin="normal"
          fullWidth
          name="companyName"
          label="Company Name"
          value={companyName}
          onChange={handleFieldsChange}
          helperText={fieldErrors.companyName}
        />
        <TextField
          error={fieldErrors.companyAddress ? true : false}
          variant="outlined"
          margin="normal"
          fullWidth
          name="companyAddress"
          label="Company Adress"
          value={companyAddress}
          onChange={handleFieldsChange}
          helperText={fieldErrors.companyAddress}
        />
        <Button
          disabled={!name || handleRequire()}
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

export default FormPersonDetails;
