import React, { Component } from 'react';
// import TinyStringComponent from '../../components/TinyStringComponent';
import styles from './styles.module.scss'; 
import triangle from './img/triangle.png';

class index extends Component {
    constructor(props){
        super(props);
        this.state ={
            isOpened: true
        }
        this.changeOpenStatus = this.changeOpenStatus.bind(this);   
    }
    changeOpenStatus(){
        console.log(this.state.isOpened);
        if(this.state.isOpened == true){
            this.setState({isOpened:false})
        }
        if(this.state.isOpened == false){
            this.setState({isOpened:true})
        }
    }


    render() {
        let returnedItem;
        if(this.state.isOpened ==true){
            returnedItem =
            <>
                <div className={styles.main} onClick={this.changeOpenStatus}>
                    <div className={styles.container}>
                        <div className={styles.littlerow}></div>
                        <div className={styles.text}>{this.props.title}</div>
                        <div className={styles.line}></div>
                        <img src={triangle} className={styles.triangle}></img>
                    </div>
                </div>
                <this.props.item />  
            </>;
        }
        else{
            returnedItem =  
            <>
                <div className={styles.main} onClick={this.changeOpenStatus}>
                    <div className={styles.container}>
                        <div className={styles.littlerow}></div>
                        <div className={styles.text}>{this.props.title}</div>
                        <div className={styles.line}></div>
                        <img src={triangle} className={styles.triangle} style={{transform: "rotate(90deg)"}}></img>
                    </div>
                </div>
            </>;
        }
            return (
                <>
                {returnedItem}
                </>
            )
        
        // else{
        //     <>
        //         <div className={styles.main} onClick={this.changeOpenStatus}>
        //             <div className={styles.container}>
        //                 <div className={styles.littlerow}></div>
        //                 <div className={styles.text}>{this.props.title}</div>
        //                 <div className={styles.line}></div>
        //             </div>
        //         </div>
        //     </>
        // }
      
       
            
        }
}

export default index;