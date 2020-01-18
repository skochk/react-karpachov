import React, { Component } from 'react';
import clocks from './img/clocks.png';
import glasses from './img/glasses.png';
import testPic from './img/test.svg';
import styles from './styles.module.scss';


class index extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        if(this.props.item.type == 'article'){
            return (
                <div className={styles.item}>
                    <img src={glasses}></img>
                    <div className={styles.text}> Статья</div>
                    <img src={clocks}></img>
                    <div className={styles.text}>{this.props.item.time}</div>
                </div>
            );
        }
        else{
            return (
                <div className={styles.item}>
                    <div className={styles.practice}>Практика</div>
                    <img src={testPic}></img>
                    <div className={styles.text}> Тест</div>
                    <img src={clocks}></img>
                    <div className={styles.text}>{this.props.item.time}</div>
                </div>
            ); 
        }
    }
}

export default index;