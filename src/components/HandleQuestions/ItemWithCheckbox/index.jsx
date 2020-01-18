import React, { Component } from 'react';
import styles from './styles.module.scss';
import eyeimg from './img/eye.png';
import alerimg from './img/notify.png';
import clocks from './img/clocks.png';
import glasses from './img/glasses.png';
import testPic from './img/test.svg';

import TaskComponent from '../../HandleQuestions/ItemWithCheckbox/TaskComponent';

class index extends Component {
    constructor(props){
        super(props);
        this.state = {
                border: '0px',
                bgcolor: '#FFA43F',
                color: 'white'
            
        }
        this.HandleState = this.HandleState.bind(this);   
    } 
    HandleState(){
        console.log(this.state.bgcolor);
        if(this.state.bgcolor =="#FFA43F"){
            this.setState({
                    border: '1.5px solid #FFA43F',
                    bgcolor: '#F3F3F3',
                    color: 'black',
                
            })
        }else{
            this.setState({
                
                    border: '0px',
                    bgcolor: '#FFA43F'
                
            })
        }
    }

    render() {
        return (
            <div className={styles.boxZero}>
                <div style={{"background-color": this.state.bgcolor, color:this.state.color}} className={styles.blockNubmer}>{this.props.index + 1}</div>
                <div style={{border:this.state.border}} className={styles.box}>
                    <div className={styles.secondBox}>
                        <img className={styles.leftImage} src={this.props.item.img}></img>
                        <div className={styles.middleRow}>
                            <div className={styles.firstRow}>
                                <TaskComponent item={this.props.item.tasks}/>
                            </div>  
                            <div className={styles.mainTitle}>{this.props.item.mainText}</div>
                            <div className={styles.whatToDo}>
                                <div className={styles.viewMore}>
                                    <img src={eyeimg}></img>
                                    Просмотреть
                                </div>
                                <div className={styles.beAlerted}>
                                    <img src={alerimg}></img>
                                    Напомнить
                                </div>
                            </div>
                        </div>
                    </div>

                
                    <label className={styles.switch}>
                        <input type="checkbox" unchecked onClick={this.HandleState}/>
                        <span className={[styles.slider, styles.round].join(' ')} />
                    </label>
                </div>
            </div>
        
        );
    }
}

export default index;