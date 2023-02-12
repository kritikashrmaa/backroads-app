import React from 'react'
import { articles } from '../data'
import Title from './Title'

const Services = () => {
  return (
    
    <section className="section services" id="services">
      <Title h1="our" h2="services"/>
      <div className="section-center services-center">
        {
           articles.map((item)=>{
            return(
              <article className="service" key={item.id}>
              <span className="service-icon">
                <i className={item.classValue}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{item.text}</h4>
                <p className="service-text">
                  {item.p}
                </p>
              </div>
            </article>
            )
           })
        }
       
      </div>
    </section>
  )
}

export default Services
