import React, { Component } from 'react';
import styles from './styles.module.scss';

class index extends Component {
    render() {
        return (
            <div className={styles.content}>
                <div className={styles.container}>
                    
                    <div className={styles.footer_section}>
                            <div className={styles.section_name}>Онлайн - школа</div>
                            <div className={styles.section_dash}></div>
                            <ul>
                                <a ><ol>О школе</ol></a>
                                <a > <ol>Об авторе</ol></a>
                                <a ><ol>Вопрос/Ответ</ol></a>
                                <a ><ol>Отзывы</ol></a>
                            </ul>
                        </div>        
                        <div className={styles.footer_section}>
                                <div className={styles.section_name}>Материалы</div>
                                <div className={styles.section_dash}></div>
                                <ul>
                                    <a ><ol>Мои курсы</ol></a>
                                    <a > <ol>Бесплатные курсы</ol></a>
                                    <a ><ol>Все о детях</ol></a>
                                    <a ><ol>О личности</ol></a>
                                    <a > <ol>О семье</ol></a>
                                    <a ><ol>Ближайшие курсы</ol></a>
                                    <a ><ol>Новинки</ol></a>
                                </ul>
                            </div> 
                            <div className={styles.footer_section}>
                                    <div className={styles.section_name}>Информация</div>
                                    <div className={styles.section_dash}></div>
                                    <ul>
                                        <a ><ol>Способы оплаты</ol></a>
                                        <a > <ol>Политика конфиденциальности</ol></a>
                                        <a ><ol>Договор оферты</ol></a>
                                
                                    </ul>
                                </div> 
                                <div className={styles.footer_section}>
                                        <div className={styles.section_name}>Контакты</div>
                                        <div className={styles.section_dash}></div>
                                        <ul>
                                            <a ><ol>+38 (044) 35 36 036</ol></a>
                                            <a > <ol>+7 (495) 504 36 06</ol></a>
                                            <a ><ol>info@karpachoff.com</ol></a>
                                            <a ><ol>school.karpachoff.com</ol></a>
                                        </ul>
                                    </div> 
                </div>
            </div>
        );
    }
}

export default index;