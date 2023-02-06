import React from 'react'
import servicesText from './ServicesText.json'
import './ServicesStyle.scss'
export default function ServicesSection() {
	const elementCards = servicesText.map((item, i) => {
		return (
					  <div key={i} className="services-item">
						  <div className="services-item__icon"><img src={item.logo} alt="" /></div>
						  <div className="services-item__title">{item.title}</div>
						  <div className="services-item__text">{item.body}</div>
						  <button className='services-item__button'><p>{item.buttonText}</p></button>
					  </div>
		)
	})
  return (
	  <div className="services">
		  <div className="services__container">
			  <div className="services__header ">
				  <div className="services__our">Our Services</div>
				  <h2 className='services__title'>3 Ways To Use Squadhelp</h2>
				  <div className="services__sub-title">Squadhelp offers 3 ways to get you a perfect name for your business.</div>
			  </div>
			  <div className="services__body services">
				  <div className="services__column">{elementCards}</div>
				  
			  </div>
		  </div>
		</div>
  )
}







