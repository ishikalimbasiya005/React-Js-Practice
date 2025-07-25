import axios from "axios";
import React, { useRef } from "react";
import "./Style.css"; // Assuming you have a CSS file for styling


const CreateApi = () => {
  var txtname = useRef();
  var txtemail = useRef();
  var txtpassword = useRef();

        const insert = (e) => {
                    e.preventDefault();

                    var name = txtname.current.value;
                    var email = txtemail.current.value;
                    var password = txtpassword.current.value;

                    var a = new FormData()
                    a.set('name' ,name)
                    a.set('email' ,email)
                    a.set('password' ,password)


                    axios.post('https://geton.yarainfotech.com/insert-data.php',a).then(function(){
    })
    
  };
  return (
    <>
    <h1>Insert Data :</h1><hr />
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
              <input type="submit" value={'submit'} />
            </td>
          </tr>
        </table>
      </form>
    </>
  );
};

export default CreateApi;
