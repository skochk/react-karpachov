import React, { Component } from 'react';
import ItemWithCheckbox from '../../components/HandleQuestions/ItemWithCheckbox';
import styles from './styles.module.scss';

import threeCube from './img/3cube.png';
import sunImg from './img/sun.png';
class index extends Component {

    constructor(props){
        super(props);
          this.state ={
              itemlist :   []
              }
        }
   
      
    componentDidMount(){
        this.setState({
            itemlist:[
                {
                    img:threeCube,
                    mainText:'Формирование эмоциональной связи с родителями',
                },
                {
                    img:sunImg,
                    mainText:'Объяснить отцу и\или другим членами семьи, проживают с вами о предстоящем этапе в вашей семье',
                },
                
            ]
        })
    }

    render() {
        return (
            <div  className={styles.container}>
                {this.state.itemlist.map((item, index)=>{
                    return(
                         <ItemWithCheckbox item={item} index={index}/>
                         );
                })}
            </div>
        );
    }
}

export default index;