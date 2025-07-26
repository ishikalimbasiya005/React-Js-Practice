import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Fetchdata from "./Action/Fetchdata";
import { Insertdata } from "./NewStore";

const NewHome = () => {
  const { loading, data, error } = useSelector((state) => state.fetch);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Fetchdata());
  }, []);

  var txtname = useRef();
  var txtemail = useRef();
  var txtpassword = useRef();

  const insert = (e) => {
    e.preventDefault();

    var name = txtname.current.value;
    var email = txtemail.current.value;
    var password = txtpassword.current.value;

    const obj = {
      name: name,
      email: email,
      password: password,
    };

    dispatch(Insertdata(obj));
  };

  if (loading == true) {
    return (
      <>
        <h1>Loading.....</h1>
      </>
    );
  }

  if (error != null) {
    return (
      <>
        <h1>{error}</h1>
      </>
    );
  }

  return (
    <>
      <table border={5} cellSpacing={7}>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>password</th>
        </tr>

        {data &&
          data.map((e) => {
            return (
              <>
                <tr>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.password}</td>
                </tr>
              </>
            );
          })}
      </table>
      <br />
      <hr />
      <br />
      <h2>Insert Data :</h2>
      <form action="#" onSubmit={insert}>
        <table border={1} cellSpacing={7}>
          <tr>
            <td>Name:</td>
            <td>
              <input type="text" ref={txtname} />
            </td>
          </tr>

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

export default NewHome;
