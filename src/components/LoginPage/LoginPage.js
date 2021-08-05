import React from "react";
import { Link, Button, TextField } from "@material-ui/core";
import s from "./LoginPage.module.css";
import axios from "axios";
import { BrowserRouter, useHistory } from "react-router-dom";

let login;
const LoginPage = () => {
  const history = useHistory();
  let loginValue = React.createRef();
  let passwordValue = React.createRef();

  let autorithation = () => {
    login = loginValue.current.lastElementChild.childNodes[0].value;
    localStorage.setItem("userLogin", login);
    let password = passwordValue.current.lastElementChild.childNodes[0].value;

    const data = {
      login,
      password,
    };

    axios
      .post("https://salerow.vlazaay.pp.ua/api/login", data, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then(function (response) {
        if (response.data.status === 200) {
          history.push("/user");
        } else {
          alert("This user hasn't been registered");
          //history.push('/personalaccount'); //comment this
          loginValue.current.lastElementChild.childNodes[0].value = "";
          passwordValue.current.lastElementChild.childNodes[0].value = "";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <BrowserRouter>
      <form className={s.form} action="/" method="POST">
        <div>
          <label htmlFor="login">Enter your login:</label>
          <div>
            <TextField ref={loginValue} className={s.input} label="Login" />
          </div>
        </div>
        <div>
          <label htmlFor="password">Enter your password:</label>
          <div>
            <TextField ref={passwordValue} className={s.input} label="Password" />
          </div>
        </div>
        <div>
          <Button onClick={autorithation} className={s.button} variant="contained" color="primary">
            Log in
          </Button>
        </div>
        <Link href="/registration" className={s.link}>
          Registration
        </Link>
      </form>
    </BrowserRouter>
  );
};
export default LoginPage;
