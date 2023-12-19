import React from "react";
class UserInfor extends React.Component{
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
    handleovermouse=(event) =>{
        console.log(event.target);
    };
    handeleOnchangeInput=(event) =>{
        // alert('me');
        this.setState({ name:event.target.value})
        
        // console.log(event.target.value);   
    };
    handeleOnchangeAge=(event)=>{
        this.setState({ age:event.target.value})
    }
    handeonSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state); 
    }     
    render(){
       return(
        <div>
        TOI TEN LA {this.state.name} tuoi cua toi la {this.state.age}
        <button onClick={(event)=>this.handleclick(event)}>button</button>
        <button onMouseOver={this.handleovermouse}>overmouse</button>
        <br/>
        <form onSubmit={(event)=>this.handeonSubmit(event)}>
            <label>your name:</label>
            <input 
            value={this.state.name}
              type="text" 
            onChange={(event) =>{this.handeleOnchangeInput(event)}}/>       
           
            <label>your age:</label>
            <input 
            value={this.state.age}
            type="text" 
            onChange={(event) =>{this.handeleOnchangeAge(event)}}/>       
           <button>submit </button>
        </form>

     </div>
       );
    } 
}
export default UserInfor;