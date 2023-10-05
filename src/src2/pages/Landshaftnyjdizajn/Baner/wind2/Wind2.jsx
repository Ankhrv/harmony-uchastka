import React from 'react';
import с from './Wind2.module.css';
import im1 from './../list.png';
import im2 from './../check.png';

const Wind2 = () => {
    return (

         <div className={с.oo}> 
         
         <div className={с.e1}>
          <div className={с.text3}>
            <div className={с.text5}>
            <div><img src={im1} alt='im1' className={с.img1}></img><span className={с.T} > Составление сметы</span></div>
            <div className={с.Cena}><div className={с.Cena2}>бесплатно</div></div></div>
          <div className={с.text9}>
            <div><img src={im1} alt='im1' className={с.img1}></img><span className={с.T} > Выезд на объект</span></div>
            <div className={с.Cena}><div className={с.Cena2}>бесплатно</div></div></div>
            </div>

          <div className={с.text4}>
            <div className={с.text8}>
             <div><img src={im1} alt='im1' className={с.img1}></img><span className={с.T} > План проект</span></div>
             <div className={с.Cena}><div className={с.Cena2}>от 1000 руб/сотка</div></div></div>
            <div className={с.text10}>
             <div><img src={im1} alt='im1' className={с.img1}></img><span className={с.T} >Посадочный чертеж</span></div>
             <div className={с.Cena} ><div className={с.Cena2}>от 500 руб/сотка</div> </div></div>
             </div></div>
         <div className={с.e2}>
          <div className={с.text7}>
            <div className={с.text78}>
             <div className={с.b1}>
                        <ul className={с.b2}>
                            <li><img src={im2} alt='im2' className={с.img2}></img>   15 лет на рынке</li>
                            <li><img src={im2} alt='im2' className={с.img2}></img>   Более 4000 ландшафтных работ</li>
                            <li><img src={im2} alt='im2' className={с.img2}></img>   Сделано 5 федеральных проетов</li>
                            <li><img src={im2} alt='im2' className={с.img2}></img>   Сделано 5 региональных проетов</li>
                        </ul>
                    </div></div>
                </div></div>
            </div>

    );
}

export default Wind2;