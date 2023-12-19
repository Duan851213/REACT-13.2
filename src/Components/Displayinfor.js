import React from "react";
class Displayinfor extends React.Component{
    render(){
        const {name,tuoi}=this.props;
        return(
           
            //props
            <div>
                <div>my name is {name}</div>
                 <div>em 20  tuoi {tuoi}</div>
            </div>
        );
    };
}
export default Displayinfor;