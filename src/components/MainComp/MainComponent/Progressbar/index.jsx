import React, { Component } from 'react';
import styles from './styles.module.scss';
class index extends Component {
    render() {
        return (
            <div className={styles.screen1_themes_counter}>
                <div className={styles.themes_counter_string}>
                    <div className={styles.themes_counter_percent}></div>
                </div>
                <div className={styles.themes_total_info}>
                    <div className={styles.total_info_nubmer}>10</div>
                    <div className={styles.total_info_text}>Тем всего</div>
                    <div className={styles.total_info_nubmer}>6</div>
                    <div className={styles.total_info_text}>Тем выполнено</div>
                </div>
                
            </div>
        );
    }
}

export default index;