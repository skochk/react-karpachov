import React, { Component } from 'react';
import styles from './styles.module.scss'; 
class index extends Component {
    render() {
        return (
            <div className={styles.main} onClick={this.props.click}>
                Развернуть
            </div>
        );
    }
}

export default index;