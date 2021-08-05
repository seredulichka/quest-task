import React, { useState, useEffect } from "react";
import { Avatar, Button, TextField } from "@material-ui/core";
import s from "./Info.module.css";
import axios from "axios";
import { Skeleton } from "@material-ui/lab";

const Info = (props) => {
  let nameEdit = React.createRef();
  let emailEdit = React.createRef();
  let companyNameEdit = React.createRef();
  let companyAddressEdit = React.createRef();

  let updating = () => {
    let newName = nameEdit.current.lastElementChild.childNodes[0].value;
    let newEmail = emailEdit.current.lastElementChild.childNodes[0].value;
    let newCompanyName = companyNameEdit.current.lastElementChild.childNodes[0].value;
    let newCompanyAddress = companyAddressEdit.current.lastElementChild.childNodes[0].value;
    if (
      (newName === userInfo.data.name || newName === "") &&
      (newEmail === userInfo.data.email || newEmail === "") &&
      (newCompanyName === userInfo.data.companyName || newCompanyName === "") &&
      (newCompanyAddress === userInfo.data.companyAddress || newCompanyAddress === "")
    ) {
      alert("There is nothing to change");
    } else {
      if (newName === "") {
        newName = userInfo.data.name;
      }
      if (newEmail === "") {
        newEmail = userInfo.data.email;
      }
      if (newCompanyName === "") {
        newCompanyName = userInfo.data.companyName;
      }
      if (newCompanyAddress === "") {
        newCompanyAddress = userInfo.data.companyAddress;
      }
      const newInfo = {
        name: newName,
        email: newEmail,
        companyName: newCompanyName,
        companyAddress: newCompanyAddress,
      };
      console.log(newInfo);

      axios
        .put(`https://salerow.vlazaay.pp.ua/api/user-data/${props.userLogin}`, newInfo)
        .then((response) => {
          if (response.data.status === 202) {
            alert("Info successfully updated");
          }
        });
    }
  };

  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    setLoading(true);

    (async function fetchData() {
      let userName = props.userLogin;
      let res = await axios.get(`https://salerow.vlazaay.pp.ua/api/user-data/${userName}`);
      let data = await res;
      setUserInfo(data);
      setLoading(false);
    })();
  }, [props.userLogin]);

  const Name = () => {
    return (
      <div className={s.post2}>
        <div>Edit your name:</div>
        <TextField ref={nameEdit} className={s.input} label={userInfo.data.name} />
      </div>
    );
  };

  const Phone = () => {
    return (
      <div className={s.post3}>
        <div>Edit your email:</div>
        <TextField ref={emailEdit} className={s.input} label={userInfo.data.email} />
      </div>
    );
  };

  const CompanyName = () => {
    return (
      <div className={s.post4}>
        <div>Edit your company name:</div>
        <TextField ref={companyNameEdit} className={s.input} label={userInfo.data.companyName} />
      </div>
    );
  };

  const CompanyAddress = () => {
    return (
      <div className={s.post5}>
        <div>Edit your company address:</div>
        <TextField
          ref={companyAddressEdit}
          className={s.input}
          label={userInfo.data.companyAddress}
        />
      </div>
    );
  };

  return (
    <div className={s.gridСontainer}>
      {loading ? (
        <Skeleton
          className={`${s.post1}`}
          variant="rect"
          width={210}
          height={210}
          animation="wave"
        />
      ) : (
        <Avatar className={`${s.post1} ${s.avatar}`}>
          {" "}
          {userInfo.data.name[0].toUpperCase()}{" "}
        </Avatar>
      )}
      {loading ? (
        <Skeleton className={s.post2} variant="rect" width={300} height={40} animation="wave" />
      ) : (
        <Name />
      )}
      {loading ? (
        <Skeleton className={s.post3} variant="rect" width={300} height={40} animation="wave" />
      ) : (
        <Phone />
      )}
      {loading ? (
        <Skeleton className={s.post4} variant="rect" width={300} height={40} animation="wave" />
      ) : (
        <CompanyName />
      )}
      {loading ? (
        <Skeleton className={s.post5} variant="rect" width={300} height={40} animation="wave" />
      ) : (
        <CompanyAddress />
      )}
      {loading ? (
        <Skeleton variant="rect" width={300} height={40} animation="wave" />
      ) : (
        <Button onClick={updating} className={s.button} variant="contained" color="primary">
          {" "}
          Update{" "}
        </Button>
      )}
    </div>
  );
};

export default Info;
