import React, { useState } from "react";

import {
  FormControl,
  Typography,
  TextField,
  IconButton,
  Button,
  Snackbar,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import CloseIcon from "@material-ui/icons/Close";

const FormPassword = ({ formData, step, error, fieldErrors }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(password);
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const { password } = formData;

  return (
    <div className="loginBox">
      <Typography component="h1" variant="h5">
        Step {step}
      </Typography>

      {password ? (
        <form>
          <FormControl>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="password"
              name="password"
              label="Your password:"
              value={password}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={handleClick}
            >
              <FileCopyIcon />
            </IconButton>
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              open={open}
              onClose={handleClose}
              autoHideDuration={3000}
              message="The password has been copied!"
              action={
                <React.Fragment>
                  <IconButton size="small" aria-label="close" color="inherit" onClick={handleClick}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </React.Fragment>
              }
            />
            <Button
              fullWidth
              href="/"
              variant="contained"
              color="primary"
              type="submit"
              label="submit"
            >
              back to login
            </Button>
          </FormControl>
        </form>
      ) : (
        <Skeleton variant="text" />
      )}
    </div>
  );
};

export default FormPassword;
