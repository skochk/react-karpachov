import React, { Component } from 'react';
import ItemWithCheckbox from '../../components/HandleQuestions/ItemWithCheckbox';
import styles from './styles.module.scss';

import threeCube from './img/3cube.png';
import sunImg from './img/sun.png';
import thinking from './img/thinking.svg';
import glasses from './img/glasses.png';
import clocks from   './img/clocks.png';

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
                    tasks:
                        {
                            type: 'article',
                            time: '1 час 15 минут',
                        },
                    mainText:'Формирование эмоциональной связи с родителями',
                },
                {
                    img:sunImg,
                    tasks:
                    {
                        type: 'test',
                        time: '30 минут',
                    },
                    mainText:'Объяснить отцу и\или другим членами семьи, проживают с вами о предстоящем этапе в вашей семье',
                },
                {
                    img:thinking,
                    tasks:
                    {
                        type: 'article',
                        time: '1 час 15 минут',
                    },
                    mainText:'Формирование эмоциональной связи с родителями',
                },
                {
                    img:thinking,
                    tasks:
                    {
                        type: 'article',
                        time: '1 час 15 минут',
                    },
                    mainText:'Формирование эмоциональной связи с родителями',
                },
                {
                    img:thinking,
                    tasks:
                    {
                        type: 'practice',
                        time: '30 минут',
                    },
                    mainText:'Объяснить отцу и\или другим членами семьи, проживают с вами о предстоящем этапе в вашей семье',
                },
                
                
                
            ]
        })
    }

    render() {
        return (
            <div className={styles.bigbox}>
                <div  className={styles.container}>
                    {this.state.itemlist.map((item, index)=>{
                  
                        return(
                            <ItemWithCheckbox item={item} index={index}/>
                            );
                    })}
                </div>
            </div>
        );
    }
}

export default index;