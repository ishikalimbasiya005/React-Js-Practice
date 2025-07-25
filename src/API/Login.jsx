import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  var txtemail = useRef();
  var txtpassword = useRef();
  var navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    var email = txtemail.current.value;
    var password = txtpassword.current.value;

    var a = new FormData();
    a.set("email", email);
    a.set("password", password);

    axios
      .post("https://geton.yarainfotech.com/login-data.php", a)
      .then(function (abc) {
        if (abc.data.status == "true") {
          navigate("/ReadApi");
          // console.log(abc.data.userdata.name);
          localStorage.setItem("name", abc.data.userdata.name);
        }
      });
  };
  return (
    <>
      <h1>Login Form :</h1>
      <hr /><br />
      <h4>
        The login will only happen if the data with that name exists in the
        database.
      </h4><br />
      <form action="#" onSubmit={submit}>
        <table border={1} cellSpacing={7}>
          <tr>
            <td>Email:</td>
            <td>
              <input type="text" ref={txtemail} />
            </td>
          </tr>

          <tr>
            <td>Password:</td>
            <td>
              <input type="text" ref={txtpassword} />
            </td>
          </tr>

          <tr>
            <td>
              <input type="submit" value={"submit"} />
            </td>
          </tr>
        </table>
      </form>
    </>
  );
};

export default Login;
