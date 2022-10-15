import React from 'react';
import './Work.css';
import Works from './Works';

const Work = () => {
  return (
    <section className='work section' id='portfolio'>
            <h3 className='section__title'>PortFolio</h3>
            <span className='section__subtitle'>Most Recent Work</span>
            <Works /> 
    </section>
  )
}

export default Work