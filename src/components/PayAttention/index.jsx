import React, { Component } from 'react';
import styles from './styles.module.scss';
import AttentionItem from '../../components/PayAttention/AttentionItem';

class index extends Component {
  
    render() {
        return (
            <div className={styles.container}>
                {this.props.itemlist.map(item=>(
                    <AttentionItem item={item}/>
                ))}
                 
            </div>
        );
    }
}

export default index;