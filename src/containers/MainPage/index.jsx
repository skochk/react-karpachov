import React, { Component } from 'react';
import Header from '../../components/HeaderComponent';
import FirstComponent from '../../components/FirstComponent';
import HlebBar from '../../components/HlebBar';
import SliderComponent from '../../components/SliderComponent';
import HandleQuestions from '../../components/HandleQuestions';
import PayAttention from '../../components/PayAttention';
import Footer from '../../components/Footer';
import FooterString from '../../components/FooterString'


import threeCube from './img/3cube.png';
import sunImg from './img/sun.png';
import thinking from './img/thinking.svg';
import swimmer from './img/swimmer.svg';
import sleep from './img/sleep.png';
import heart from './img/heart.png';

class index extends Component {

  constructor(props){
    super(props);
      this.state ={
          itemlistHandleQuestion :   [],
          itemlistAddTasks :   [],
          itemlistPayAtt: [],
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
      itemlistPayAtt: [
        {
            img: swimmer,
            title:'Плавание',
            content: 'Плавание может значительно улучшить осанку. Помимо того, что в воде позвоночник испытывает меньше гравитационных нагрузок, плавание улучшает состояние мышц спины, грудной клетки и поясницы. От сутулости лучше всего помогает плавание кролем на спине',
        },
        {
            img: sleep,
            title: 'Сон',
            content:'Быстрый сон. Следует за медленным сном и длится от 10 до 20 минут. Температура и давление повышаются, сердце бьётся чаще. Тело обездвижено, за исключением мышц, отвечающих за сердцебиение и дыхание. Под сомкнутыми веками быстрые движения совершают глазные яблоки (отсюда название — БДГ). Мозг активно работает. Вы видите сны. Фазы Non-REM и REM чередуются друг с другом. Сначала вы погружаетесь в медленный сон и проходите все его стадии. Это занимает порядка 90 минут. Затем наступает фаза быстрого сна. В первый раз она короткая, не больше 5 минут. Этот круг называется циклом сна. Циклы повторяются. При этом уменьшается доля медленного сна и увеличивается (до 1 часа) продолжительность быстрого. Здоровый человек обычно единовременно проходит через пять циклов сна.'
        },
        {
            img:heart,
            title: 'Поликлинника',
            content: 'Украинцы бьют тревогу – в последнее время стало проблемой лечение даже банальной детской простуды, не говоря уже о болезнях посерьезнее. Во-первых, сложно вызвать на дом врача – в поликлиниках попросту перестали принимать вызовы. Во-вторых, скорая помощь также отказывается ехать к ребенку "по пустякам", к примеру, на высокую температуру. В-третьих, не пробиться на прием к участковому педиатру. "В поликлиниках огромные очереди, попасть к хорошему детскому врачу очень сложно", – говорит руководитель "Агентства медицинского маркетинга" Юрий Чертков.'
        }

      ]
    })
}
render(){
  
  return(
    <>
      <Header />
      <FirstComponent />
      <HlebBar />
      <SliderComponent item={HandleQuestions} itemlist={this.state.itemlistHandleQuestion} title="Проработать"/>
      <SliderComponent item={HandleQuestions} itemlist={this.state.itemlistAddTasks} title="Дополнительные задания"/>
      <SliderComponent item={PayAttention} itemlist={this.state.itemlistPayAtt} title="Обратить внимание"/>
      <Footer/>
      <FooterString/>
    </>
  )
}

}

export default index;