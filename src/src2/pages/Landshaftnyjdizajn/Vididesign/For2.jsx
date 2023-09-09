import React from 'react';
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
  
  
  return (
    
<div className={n.Glav}>

<div className={n.txt}><p>Виды ландшафтного дизайна</p> 
</div>


<div className={n.Pic4}>

    <div className={n.Pic}>
    <div className={n.Pic300}> 
    <div className={n.Pic200}> 
    <div className={n.Ppic}>
   
    <img src={france} alt='hh1' className={n.Pic2}>
    </img>
    
      </div>


    <div className={n.Ppic}>
   
    <img src={english} alt='hh' className={n.Pic2}></img>
   
  
    
     
    </div></div>
    
    <div className={n.Pic200}> 
     <div className={n.Ppic}>
  
    <img src={kantri} alt='hh1'className={n.Pic2}></img>
 
   
   

    </div>

    <div className={n.Ppic}>
   
    <img src={japan} alt='hh1' className={n.Pic2}></img>
 
   
   
 
    

    </div></div>
   </div>
 
</div>
</div>

<div className={n.Pic4}>
    <div className={n.Pic}>
    <div className={n.Pic300}> 

    <div className={n.Pic200}> 
    <div className={n.Ppic}>
    
    <img src={france} alt='hh1' className={n.Pic2}></img>
   
  
   


      </div>


      <div className={n.Ppic}>
    
     <img src={english} alt='hh' className={n.Pic2}></img>

  
    
     



          
       
    



    </div></div>
    
    <div className={n.Pic200}> 
    <div className={n.Ppic}>
  
    <img src={kantri} alt='hh1'className={n.Pic2}></img>
  
    

    

    </div>

    <div className={n.Ppic}>
   
    <img src={japan} alt='hh1' className={n.Pic2}></img>

   
   

   

    </div></div>
   </div>
 
</div>
</div>
    </div>
    
    
    ); 
}
export default For2;