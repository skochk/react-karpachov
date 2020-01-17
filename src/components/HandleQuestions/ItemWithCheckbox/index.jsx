import React, { Component } from 'react';
import styles from './styles.module.scss';
import eyeimg from './img/eye.png';
import alerimg from './img/notify.png';

class index extends Component {
    render() {
        return (
            <div className={styles.boxZero}>
                <div className={styles.blockNubmer}>{this.props.index + 1}</div>
                <div className={styles.box}>
                    <div className={styles.secondBox}>
                        <img className={styles.leftImage} src={this.props.item.img}></img>
                        <div className={styles.middleRow}>
                            <div className={styles.firstRow}>статья и тд</div>  
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
                    <input
                        name="isGoing"
                        type="checkbox"
                        />
                </div>
            </div>
        
        );
    }
}

export default index;