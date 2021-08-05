import React, { useState } from "react";

import FormLogin from "./FormLogin";
import FormPersonDetails from "./FormPersonDetails";
import FormPassword from "./FormPassword";
import { Container, makeStyles, CssBaseline } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const UserForm = () => {
  const [formData, setFormData] = useState({
    login: "",
    name: "",
    phone: "",
    email: "",
    companyName: "",
    companyAddress: "",
    password: "",
  });

  const [fieldErrors, setFieldErrors] = useState({
    login: "",
    name: "",
    phone: "",
    email: "",
    companyName: "",
    companyAddress: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [step, setStep] = useState(1);
  const classes = useStyles();
  const baseUrl = "https://salerow.vlazaay.pp.ua/api";

  // Handle step change and fetch data
  const handleStepChange = (event) => {
    event.preventDefault();
    const { login, name, email, phone, companyName, companyAddress } = formData;
    if (step === 1) {
      fetch(`${baseUrl}/check-login/${login}`)
        .then((res) => {
          console.log(res);
          if (res.ok) {
            setStep(step + 1);
          } else {
            setError(true);
            throw new Error("This login is already in use please choose another");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (step === 2) {
      event.preventDefault();
      fetch("https://salerow.vlazaay.pp.ua/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
          email,
          login,
          name,
          phone,
          companyName,
          companyAddress,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((data) => {
          setFormData({
            ...formData,
            password: data.password,
          });
          setStep(step + 1);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // Handle fields change
  const handleFieldsChange = (event) => {
    const { name, value } = event.target;
    event.preventDefault();
    setFormData({
      ...formData,
      [name]: value,
    });
    formValidator(name, value);
  };

  const formValidator = (name, value) => {
    // Login
    if (name === "login") {
      if (!value.match(/^[a-zA-Z0-9]{6,}$/)) {
        setFieldErrors({
          ...fieldErrors,
          [name]: "At least 6 characters long, only letters and numbers",
        });
      } else {
        setFieldErrors({
          ...fieldErrors,
          [name]: "",
        });
      }
    }

    // Name
    if (name === "name") {
      if (!value.match(/^[a-zA-Z ]{2,}$/)) {
        setFieldErrors({
          ...fieldErrors,
          [name]: "At least 2 characters long, only letters",
        });
      } else {
        setFieldErrors({
          ...fieldErrors,
          [name]: "",
        });
      }
    }

    // Phone
    if (name === "phone") {
      if (!value.match(/^[+0-9]{10,}$/)) {
        setFieldErrors({
          ...fieldErrors,
          [name]: "At least 10 characters long, only numbers",
        });
      } else {
        setFieldErrors({
          ...fieldErrors,
          [name]: "",
        });
      }
    }

    // Company name
    if (name === "companyName") {
      if (!value.match(/^[a-zA-Z0-9]{2,}$/)) {
        setFieldErrors({
          ...fieldErrors,
          [name]: "At least 2 characters long, only letters and numbers",
        });
      } else {
        setFieldErrors({
          ...fieldErrors,
          [name]: "",
        });
      }
    }

    // Company address
    if (name === "companyAddress") {
      if (!value.match(/^[a-zA-Z0-9]{6,}$/)) {
        setFieldErrors({
          ...fieldErrors,
          [name]: "At least 6 characters long, only letters and numbers",
        });
      } else {
        setFieldErrors({
          ...fieldErrors,
          [name]: "",
        });
      }
    }
  };

  const handleRequire = () => {
    let sum = "";
    for (let err of Object.values(fieldErrors)) {
      sum += err;
    }

    return sum.length ? true : false;
  };

  const switchComponent = (step) => {
    switch (step) {
      case 1:
        return (
          <FormLogin
            formData={formData}
            step={step}
            handleFieldsChange={handleFieldsChange}
            handleStepChange={handleStepChange}
            fieldErrors={fieldErrors}
            error={error}
            handleRequire={handleRequire}
          />
        );
      case 2:
        return (
          <FormPersonDetails
            formData={formData}
            step={step}
            handleFieldsChange={handleFieldsChange}
            handleStepChange={handleStepChange}
            fieldErrors={fieldErrors}
            handleRequire={handleRequire}
          />
        );
      case 3:
        return <FormPassword step={step} formData={formData} />;
      default:
        <div>Error</div>;
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>{switchComponent(step)}</div>
    </Container>
  );
};

export default UserForm;
