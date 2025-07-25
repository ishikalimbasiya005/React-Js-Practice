import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReadApi = () => {
  var [data, setdata] = useState([]);
  var navigate = useNavigate();

  useEffect(() => {
    fetchdata();
  }, []);
  

  function fetchdata() {
    axios
      .get("https://geton.yarainfotech.com/get-data.php").then(function (abc) {
        setdata(abc.data);
      });
  }

  const mydelete = (e) => {
    var id = e.target.getAttribute("data");
    //   console.log(id);

    var a = new FormData();
    a.set("id", id);

    axios.post("https://geton.yarainfotech.com/delete-data.php", a).then(function (abc) {
        if (abc.data.status == "true") {
          fetchdata();
        }
      });
  };


  const myupdate = (e) => {
    var id = e.target.getAttribute("data");
    navigate("/updateApi/" + id);
  };
  const mylogout = () => {
    navigate("/");
  };

  return (
    <>
      <h2>Example - API[Read]</h2>
      <br />

      <h1>Welcome {localStorage.getItem('name')}</h1><hr /><br />
      
      <button onClick={mylogout}>Logout</button><br />
      <br />
      <table border={5} cellSpacing={7}>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>password</th>
          <th>Action</th>
          <th>Action</th>
        </tr>

        {data.map((e) => {
          return (
            <>
              <tr>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.password}</td>
                <td>
                  <button onClick={mydelete} data={e.id}>
                    Delete
                  </button>
                </td>
                <td>
                  <button onClick={myupdate} data={e.id}>
                    Update
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
};

export default ReadApi;
