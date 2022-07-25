import React, { useState } from 'react'
import { sliderData } from '../../assets/silderData'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import './SliderImages.css'

const SildeImages = ({slides}) => {

    const [current, setCurrent] = useState(0)
    const len = slides.length

    const nextSlide = () => {
        setCurrent(current === len - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? len - 1 : current - 1)

    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }



    return (
        <section className='slider'>
            <FaArrowLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowRight className='right-arrow' onClick={nextSlide} />
            {sliderData.map((slides, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slides.image} alt='data' className='image' />)}

                    </div>
                )


            })}
        </section>
    )

}

export default SildeImages