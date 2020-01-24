import React, { Component } from 'react';
import styles from './styles.module.scss';
import triangle from './img/triangle.png';

class index extends Component { 
    constructor(props){
        super(props);
        this.state={
            isOpened: false
        };
        this.HandleOpenSlider = this.HandleOpenSlider.bind(this);
    }

    HandleOpenSlider(){
        this.setState({
            isOpened: !this.state.isOpened
        })
        console.log(this.state.isOpened);
    }

    render() {
        return (
            <div className={styles.parentbox}>
                <div className={styles.slider} onClick={this.HandleOpenSlider}>
                    <div className={styles.leftside}>
                    <img src={this.props.item.img}></img>
                    <div className={styles.text}>{this.props.item.title}</div>
                    </div>
                    <img style={{transform: this.state.isOpened ? "rotate(180deg)" : 'rotate(90deg)'}} src={triangle}></img>
                </div>
                <div style={{display:this.state.isOpened ? 'block' : 'none'}} className={styles.content}>{this.props.item.content}</div>
            </div>
        );
    }
}

export default index;