import React from "react";
import UserInfor from "./UserInfor";
import Displayinfor from "./Displayinfor";
class MyComponents extends React.Component{
    render(){
        const myinf=["a","b","c"];
        return(
         <div>
            <UserInfor></UserInfor>
            <br/>
            <Displayinfor name="duan" tuoi='19'></Displayinfor>
            <hr/>
            <Displayinfor name="duan" tuoi={20} myinf={myinf}></Displayinfor>
         </div>
        );
      };
}
export default MyComponents;