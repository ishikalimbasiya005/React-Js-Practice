import React from 'react';

// link for ICON :-
// Install Command: npm install react-icons Then Run 
import { FaAddressBook } from "react-icons/fa";


// External css 2nd step [First step is linked in public/index.html file  ]:--------------------
// import './Style.css';

const Home = () => {

    // internal css:-----------------------
    // const mystyle = {
    //     color : "red",
    //     fontSize : "30px",
    // };

    return (
        <>
        {/* inline css :---------------------------*/}
         <h2 style={{color :"pink", fontSize :"30px"}}>Hello Worlds!</h2>  

        {/* internal css :------------------------------- */}
        {/* <h2 style={mystyle}>Hello World!</h2> */}

        {/* External component css :-------------------------*/}
        {/* <h1>Hello world!</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, alias molestias repudiandae enim repellendus accusamus sit. Quia non saepe consequatur sequi, ipsum est amet accusantium tenetur ipsam nesciunt? Magni, aperiam.</p> */}


        {/* Icon Code For Contect book */}
        <FaAddressBook />
        </>   
    );
}
export default Home;