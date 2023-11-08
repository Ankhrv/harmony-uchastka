import React from 'react';
import e from './Form.module.css';
import Wind3auth from './windmodal/Wind3auth';
import Wind4auth from './formaobsh/Wind4auth';

const Form = () => {

	return (
        <div className={e.k}><div className={e.hh}>

          <Wind3auth/>
          <Wind4auth/>

          </div> 
        </div>
      
    );
}


export default Form;