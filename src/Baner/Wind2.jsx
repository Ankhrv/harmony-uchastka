import React from 'react';
import с from './Wind2.module.css';
import im1 from '../Baner/list.png';
import im2 from '../Baner/check.png';


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
             <div><img src={im1} alt='im1' className={с.img1}></img><span className={с.T} >Простая территория</span></div>
             <div className={с.Cena}><div className={с.Cena2}>от 300 руб/м²</div></div></div>
            <div className={с.text10}>
             <div><img src={im1} alt='im1' className={с.img1}></img><span className={с.T} >Сложная территория</span></div>
             <div className={с.Cena} ><div className={с.Cena2}>от 300 руб/м²</div> </div></div>
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