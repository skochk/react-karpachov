import React, { Component } from 'react';
import styles from './styles.module.scss'; 
class index extends Component {
    render() {
        return (
            <div className={styles.main} onClick={this.props.click}>
                <div className={styles.container}>
                    <div className={styles.littlerow}></div>
                    <div className={styles.text}>{this.props.title}</div>
                    <div className={styles.line}></div>
                </div>
                
            </div>
        );
    }
}

export default index;