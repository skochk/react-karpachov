import React, { Component } from 'react';
import styles from './styles.module.scss';

class index extends Component {
    render() {
        if(this.props.show){
            return (
                <>
                    <div className={styles.parent} onClick={()=>{this.props.closemodal()}}>
                        
                    </div>
                    <div className={styles.box}>
                        <h1>Признаки, что ваш ребенок болен:</h1>
                        <iframe width="800" height="400" src="https://www.youtube.com/embed/CGndZp98x-8?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        
                        <h1 onClick={()=>this.props.closemodal()}>Закрыть видеоурок</h1>
                    </div>
                </>
            );
        }
        return null;
    }
}

export default index;