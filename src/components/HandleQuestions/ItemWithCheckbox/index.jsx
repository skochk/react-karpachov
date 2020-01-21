import React, { Component } from 'react';
import styles from './styles.module.scss';
import eyeimg from './img/eye.png';
import alerimg from './img/notify.png';
import clocks from './img/clocks.png';
import glasses from './img/glasses.png';
import testPic from './img/test.svg';
import ModalWindow from '../../HandleQuestions/ItemWithCheckbox/ModalWindow';

import TaskComponent from '../../HandleQuestions/ItemWithCheckbox/TaskComponent';

class index extends Component {
    constructor(props){
        super(props);
        this.state = {
                active: false,
                isModalVisible: false,
        }
        this.handleState = this.handleState.bind(this);
        this.showmodal = this.showmodal.bind(this); 
        this.closemodal = this.closemodal.bind(this);   
    } 
    handleState(){
        this.setState({
            active: !this.state.active
        })
    }
    showmodal(){
        this.setState({isModalVisible:!this.state.isModalVisible});
    }
    closemodal(){
        this.setState({isModalVisible:false});
    }

    render() {
        return (
            <div className={styles.boxZero} style={{border:this.state.border}} style={this.state.active?{ border:'1.5px solid #FFA43F'}:null}>
                <div style={this.state.active?{backgroundColor: '#FFA43F', color:'white'}: {backgroundColor:'#F3F3F3', color:"black",
}} className={styles.blockNubmer}>{this.props.index + 1}</div>
                <div className={styles.box}>
                    <div className={styles.secondBox}>
                        <img className={styles.leftImage} src={this.props.item.img}></img>
                        <div className={styles.middleRow}>
                            <div className={styles.firstRow}>
                                <TaskComponent  item={this.props.item.tasks}/>
                            </div>  
                            <div className={styles.mainTitle}>{this.props.item.mainText}</div>
                            <div className={styles.whatToDo}>
                                <div className={styles.viewMore}>
                                    <img src={eyeimg}></img>
                                    <ModalWindow show={this.state.isModalVisible} closemodal={this.showmodal}/>
                                    <div onClick={()=>this.showmodal()} className={styles.text}>Просмотреть</div>
                                </div>
                                <div className={styles.beAlerted}>
                                    <img src={alerimg}></img>
                                    Напомнить
                                </div>
                            </div>
                        </div>
                    </div>

                
                    <label className={styles.switch}>
                        <input type="checkbox" onClick={this.handleState}/>
                        <span className={`${styles.slider} ${styles.round}`} />
                    </label>
                </div>
            </div>
        
        );
    }
}

export default index;