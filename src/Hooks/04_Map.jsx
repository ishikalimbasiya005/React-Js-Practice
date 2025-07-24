import React from "react";

const Map = () => {
  var data = ["Radha", "meera", "Gopi", "Sita"];

  //   var data = [
  //     { name: "Radha", age: "19" },
  //     { name: "Sita", age: "20" },
  //     { name: "Mira", age: "18" },
  //   ];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Map Hook Example</h1> <hr />
      {/* 1st code :------------------------------------------------------------ */}
      {/* When show  this ouput Comment below table & var data = [...]*/}
      {data.map((e) => {
        return (
          <>
            <h2>{e}</h2>
          </>
        );
      })}
      {/* 2nd code , Make Table :-------------------------------------------------- */}
      {/* When Show This Output Comment above code  */}
      {/* <table border={1} cellSpacing={7}>
        <tr>
          <th>No</th>
          <th>name</th>
          <th>age</th>
        </tr>

        {data.map((e, number) => {
          return (
            <>
              <tr>
                <td>{number + 1}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
              </tr>
            </>
          );
        })}
      </table> */}
    </>
  );
};

export default Map;
