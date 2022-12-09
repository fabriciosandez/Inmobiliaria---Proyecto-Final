/*import React, { useState } from "react";

function Contexto (){
const UserContext = React.createContext([{}, ()=>{}]);}

function Prov (){const UserProvider = props =>{
const [auth, saveToken] = useState({
  token: "",
  auth:false
});
return(
  <UserContext.Provider value={[auth, saveToken]}>
    {props.children}
  </UserContext.Provider>
)};}

export default {Contexto, Prov};*/