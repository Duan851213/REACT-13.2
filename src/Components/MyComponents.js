import React from "react";

class MyComponents extends React.Component{
    state  ={
        address:'quang ngai',
        age: 22,
        name:'duan',
    };
    handleclick(event){
    // console.log(event.target);
    // console.log(this.state.address);
    console.log("click my button")
    // console.log("random",Math.floor(Math.random() * 100) + 1);
    // console.log("toi ten la",this.state.name)

    this.setState(
        {name:'thi hong'})
    
    };
    handleovermouse=(event)=>{
        console.log(event.target);
    };
    render(){
        return(
         <div>
            TOI TEN LA {this.state.name} toi song owr {this.state.address}
            <button onClick={(event)=>this.handleclick(event)}>button</button>

            <button onMouseOver={this.handleovermouse}>overmouse</button>
         </div>
        );
      }
}
export default MyComponents;