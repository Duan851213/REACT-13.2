import React from "react";
import logo from './../logo.svg';
import './Displayinfor.scss';
class Displayinfor extends React.Component{
    state={
        theShowHideList:true
    };
    handleShowHide=()=>{    
        this.setState({
            theShowHideList:!this.state.theShowHideList
        })
    }
   
    render(){
        const {listusers}=this.props;
        
        // const {name,tuoi}=this.props; destructing object
        return( 
            //props
            <div className='containerr-info'>   
                <img src={logo} alt='logo'/>
                <span onClick={()=>this.handleShowHide()}>{this.state.theShowHideList===true ? "hide the list:" : "show the list:"}</span>
                {this.state.theShowHideList&&
                <div>
                    
                {listusers.map((item)=>{
                    return(
                        <div key={item.id} className={item.tuoi>16?"green":"red"} >
                            <div>my name is {item.name}  </div>
                            <div>em 20  tuoi  {item.tuoi} </div>    
                            
                            
                            <div>
                            <button onClick={()=>this.props.deleteShowHide(item)}>delete</button>
                            </div>
                            <hr></hr>   
                        </div>
                    )
                })}
                
                    
                </div>
                   } 
            </div>
        );
    };
}
export default Displayinfor;