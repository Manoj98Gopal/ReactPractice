import { createContext } from "react";


const Context = createContext({
    user:{
        name:"Dummy",
        email:"dummy@gmail.com"
    }
});


export default Context;