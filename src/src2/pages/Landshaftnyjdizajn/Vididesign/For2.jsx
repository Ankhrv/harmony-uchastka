import React, { useState } from 'react';
import n from './For2.module.css';
import france from './france.jpg';
import english from './english.jpg';
import japan from './japan.jpg';
import kantri from './kantri.jpg';

// import france from './france.jpg';
// import france from './france.jpg';
// import france from './france.jpg';
// import france from './france.jpg';


const For2 = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);



  return (

    <div className={n.Glav}>

      <div className={n.txt}><p>Виды ландшафтного дизайна</p>
      </div>


      <div className={n.Pic4}>

        <div className={n.Pic}>
          <div className={n.Pic300}>
            <div className={n.Pic200}>
              <div className={n.Ppic}>

                <div alt='hh1' className={n.Pic2q}><div className={n.Pic20}>
                  {show2 && <p className={n.h1}>Центр композиции - жилой дом. Дорожки, водоемы, газоны правильной формы. Для формирования крон растений используют геометрические фигуры — круг, овал, конус. Элементы пейзажа симметричны друг другу. Классический дизайн создает эффект упорядоченности, роскоши. Для такого ландшафта подходит партерный газон. Пример французского ландшафтного дизайна — сады и парки Версаля в Париже, летний сад Петра I в Санкт-Петербурге. </p>}
                  <button className={n.h2} type='button' onClick={() => setShow2(!show2)}>Французский дизайн</button>
                </div>
                </div>
              </div>


              <div className={n.Ppic}>

                <div alt='hh1' className={n.Pic2q1}><div className={n.Pic20}> {show && <p className={n.h1}>Приближенный к естественной природной среде ландшафт. Преобладают плавные линии — извилистые дорожки, неровные границы водоемов и газонов. Обилие декоративных элементов, вьющихся и цветущих растений, крупномеров. Для такого стиля подойдет спортивный короткостриженный газон. Дорожки выкладывают плиткой или камнем. Ограды и заборы невысокие, ажурные, живая изгородь. Дизайн оптимально сочетает в себе функциональность и красоту.</p>}
                  <button className={n.h2} type='button' onClick={() => setShow(!show)}>Английский дизайн</button>
                </div>
                </div>
              </div></div>

            <div className={n.Pic200}>
              <div className={n.Ppic}>
                <div alt='hh1' className={n.Pic2q2}><div className={n.Pic20}> {show3 && <p className={n.h1}>В оформлении используют солому, глину, дерево: дорожка в виде круглых древесных срезов, забор из переплетенных веток или досок с узором. Газон из многолетних цветов, создающий эффект поля: незабудок, ромашек, фиалок. В качестве колумбария может быть использована инсталляция в виде телеги, мельницы, глиняного кувшина. </p>}
                  <button className={n.h2} type='button' onClick={() => setShow3(!show3)}>Деревенский дизайн</button>
                </div>
                </div>
              </div>

              <div className={n.Ppic}>

                <div alt='hh1' className={n.Pic2q3}><div className={n.Pic20}> {show4 && <p className={n.h1}>Ландшафтный дизайн с элементами римского и греческого стиля. Белые статуи, фонтаны, мраморные ограждения, дорожки из гальки и ракушек — отличительные черты этого стиля, навеянного морской тематикой. Обязательные элементы — бассейн, беседка. Создает эффект свободного пространства, света, тепла. Растения используют экзотические, с ароматными цветами и плодами, южные, тропические — лимон, апельсиновое дерево, жасмин, пальмы. </p>}
                  <button className={n.h2} type='button' onClick={() => setShow4(!show4)}>Средиземноморский </button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={n.Pic4}>
        <div className={n.Pic}>
          <div className={n.Pic300}>

            <div className={n.Pic200}>
              <div className={n.Ppic}>

                <div alt='hh1' className={n.Pic2q4}><div className={n.Pic20}> {show5 && <p className={n.h1}>Минимум декоративных элементов и цветов, преобладание натурального камня, бамбука, деревьев, кустарников. В качестве водоемов служат ручьи, фонтаны, водопады. Распространенный элемент — беседка в классическом японском стиле с фигурной крышей. Лавочки и дорожки из камня и бетона. Высокая глухая ограда, создающая эффект замкнутого защищенного пространства.</p>}
                  <button className={n.h2} type='button' onClick={() => setShow5(!show5)}>Японский дизайн</button>
                </div>
                </div>

              </div>
              <div className={n.Ppic}>

                <div alt='hh1' className={n.Pic2q5}><div className={n.Pic20}> {show8 && <p className={n.h1}>Отличается преобладанием белых и синих оттенков в оформлении. Извилистые дорожки выкладывают светлой плиткой или брусчаткой. Беседка из дерева, окрашенная в белые тона, белая садовая мебель, которая может быть как деревянной, так и бамбуковой или пластиковой. Прованс ассоциируется с цветами лаванды, изящными рисунками, легкостью и чистотой. Идеальный стиль для отдыха от городской суеты на приусадебном участке.</p>}
                  <button className={n.h2} type='button' onClick={() => setShow8(!show8)}>Прованс дизайн</button>
                </div>
                </div>
              </div></div>

            <div className={n.Pic200}>
              <div className={n.Ppic}>

                <div alt='hh1' className={n.Pic2q6}><div className={n.Pic20}> {show6 && <p className={n.h1}>Скандинавский стиль в ландшафтном дизайне набирает популярность по всему миру. В наших широтах, где более половины года стоит пасмурная погода, он актуален, потому что радует глаз и летом, и зимой. Предполагает практичность без вычурного декора, строгость, минимализм. Декор скандинавского стиля — садовые гномики, фонарики, резные беседки и изгороди. Основные материалы — камень, брусчатка, дерево. Газон теневыносливый, насыщенного зеленого оттенка. Цветущие растения — полудикие злаки.</p>}
                  <button className={n.h2} type='button' onClick={() => setShow6(!show6)}>Скандинавский дизайн</button>
                </div>
                </div>
              </div>

              <div className={n.Ppic}>

                <div alt='hh1' className={n.Pic2q7}><div className={n.Pic20}> {show7 && <p className={n.h1}>
                  ландшафтный дизайн в стиле хай-тек
                  Хай-тек (современный, технологичный)
                  Популярный стиль, для которого характерны минимализм, футуристичность. Стиль хай-тек возводит геометрию в абсолют, отказываясь от лишнего декора. Возникает ощущение пространства, воздушности, свежести. При его создании используют современные технологии в освещении, обеспечении безопасности. Сад хай-тек — это «умный» участок, подстраивающийся под пожелания хозяев.</p>}
                  <button className={n.h2} type='button' onClick={() => setShow7(!show7)}>Хай-тек дизайн</button>
                </div>
                </div>
              </div>
            </div></div>
        </div>
      </div>
    </div>

  )
};

export default For2;