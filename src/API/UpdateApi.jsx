import axios from "axios";
import React, { useEffect , useRef } from "react";
import { useParams } from "react-router-dom";

const UpdateApi = () => {
  var txtname = useRef();
  var txtemail = useRef();
  var txtpassword = useRef();
  var {id} = useParams();

   useEffect(() => {
    var a = new FormData();
    a.set('id' ,id)
    axios.post("https://geton.yarainfotech.com/single-data.php",a).then(function (abc) {

      txtname.current.value = abc.data.name;
      txtemail.current.value = abc.data.email;
      txtpassword.current.value = abc.data.password;
    });
    
    }, []);

        const insert = (e) => {
                    e.preventDefault();

                    var name = txtname.current.value;
                    var email = txtemail.current.value;
                    var password = txtpassword.current.value;

                    var a = new FormData()
                    a.set('id' ,id)
                    a.set('name' ,name)
                    a.set('email' ,email)
                    a.set('password' ,password)


                    axios.post('https://geton.yarainfotech.com/edit-data.php',a).then(function(){
    })
    
  };
  return (
    <>
    <h1>Update Data:</h1><hr /><br />
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

          <tr>
            <td>
              <a href="http://localhost:3000/ReadApi">BACK</a>
            </td>
          </tr>

        </table>
      </form>
    </>
  );
};

export default UpdateApi;
