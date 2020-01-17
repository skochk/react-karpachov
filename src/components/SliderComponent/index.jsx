import React, { Component } from 'react';
import TinyStringComponent from '../../components/TinyStringComponent';

class index extends Component {
    constructor(props){
        super(props);
        this.state ={
            isOpened: true
        }
        this.changeOpenStatus = this.changeOpenStatus.bind(this);   
    }
    changeOpenStatus(){

        if(this.state.isOpened == true){
            this.setState({isOpened:false})
        }
        if(this.state.isOpened == false){
            this.setState({isOpened:true})
        }
    }


    render() {

        if(this.state.isOpened ==true){
            return (
                <div onClick={this.changeOpenStatus}>
                <this.props.item />  
                </div>
            );
        }
        else{
            return(
                <TinyStringComponent click={this.changeOpenStatus}/>
            )
        }
    }
}

export default index;