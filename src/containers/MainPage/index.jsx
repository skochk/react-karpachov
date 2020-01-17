import React from 'react';
import Header from '../../components/HeaderComponent';
import FirstComponent from '../../components/FirstComponent';
import HlebBar from '../../components/HlebBar';
import SliderComponent from '../../components/SliderComponent';
import HandleQuestions from '../../components/HandleQuestions';

export default function(){
  return(
    <>
      <Header />
      <FirstComponent />
      <HlebBar />
      <SliderComponent item={HandleQuestions}/>

    </>
  )
}