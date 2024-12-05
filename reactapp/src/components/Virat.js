import React from "react";

class Virat extends React.Component{
    render(){
        const {apple}=this.props;
        const {type,color}=apple
        return(
            <h1>
                Hi! I am {color} {type} apple
            </h1>
        )
    }
}

export default Virat;