import React from "react";
import AddUserInfor from "./AddUserInfor";
import Displayinfor from "./Displayinfor";
class MyComponents extends React.Component{
    state={
      listusers:[
      {id:1, name:"duan", tuoi:15},
       {id:2, name:"hong" ,tuoi:65},
       {id:3, name:"thi" ,tuoi:66},
      ]
    }
    transmitFunction= (obj) =>{
       console.log("check",obj);
       this.setState({
        listusers: [obj,...this.state.listusers] 
       })
    };
    deleteShowHide=(user)=>{
      console.log("user",user)
      let cloneList=this.state.listusers;
       cloneList= cloneList.filter(item=>console.log("check",item));
       
      this.setState({
        listusers: cloneList
      })
  }
    render(){
        //DON'T REPEAT YOURSELF
        return(
         <>
            <AddUserInfor  transmitFunction={this.transmitFunction}  ></AddUserInfor>
            <br/>
            {/* <Displayinfor name="duan" tuoi='19'></Displayinfor> */}
            <hr/>
            <Displayinfor 
            listusers={this.state.listusers}
            deleteShowHide={this.deleteShowHide}
            />
            </>
        );
      };
}
export default MyComponents;