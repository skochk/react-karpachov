import React, { Component } from 'react';
import styles from './styles.module.scss'; 
import triangle from './img/triangle.png';

class index extends Component {
    constructor(props){
        super(props);
        this.state ={
            isOpened: true,
            itemlist: []
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
        
            return (
                <>
                
                {this.state.isOpened ? 
                <><div className={styles.main} onClick={this.changeOpenStatus}>
                    <div className={styles.container}>
                        <div className={styles.littlerow}></div>
                        <div className={styles.text}>{this.props.title}</div>
                        <div className={styles.line}></div>
                        <img src={triangle} className={styles.triangle}></img>
                    </div>
                </div>
                <this.props.item itemlist={this.props.itemlist} bgcolor={this.props.bgcolor}/> </> : 
                <div className={styles.main} onClick={this.changeOpenStatus}>
                <div className={styles.container}>
                    <div className={styles.littlerow}></div>
                    <div className={styles.text}>{this.props.title}</div>
                    <div className={styles.line}></div>
                    <img src={triangle} className={styles.triangle} style={{transform: "rotate(90deg)"}}></img>
                </div>
            </div>
                }
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