import React, { Component } from 'react';
import Header from '../../components/HeaderComponent';
import FirstComponent from '../../components/FirstComponent';
import HlebBar from '../../components/HlebBar';
import SliderComponent from '../../components/SliderComponent';
import HandleQuestions from '../../components/HandleQuestions';


import threeCube from './img/3cube.png';
import sunImg from './img/sun.png';
import thinking from './img/thinking.svg';

class index extends Component {

  constructor(props){
    super(props);
      this.state ={
          itemlistHandleQuestion :   [],
          itemlistAddTasks :   []
          }
    }

  componentDidMount(){
    this.setState({
      itemlistHandleQuestion:[
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
        ],
        itemlistAddTasks:[
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
              img:sunImg,
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
                  type: 'test',
                  time: '30 минут',
              },
              mainText:'Объяснить отцу и\или другим членами семьи, проживают с вами о предстоящем этапе в вашей семье',
          }
      ],
    })
}
render(){
  
  return(
    <>
      <Header />
      <FirstComponent />
      <HlebBar />
      <SliderComponent item={HandleQuestions} itemlist={this.state.itemlistHandleQuestion} title="Проработать"/>
      <SliderComponent item={HandleQuestions} bgcolor={'#E5E5E5'} itemlist={this.state.itemlistAddTasks} title="Дополнительные задания"/>

    </>
  )
}

}

export default index;