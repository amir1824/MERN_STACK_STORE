import React from 'react'
import { Container} from 'react-bootstrap'
import './Home.css'
import p2 from  '../../assets/p2.gif'
import SlideImages from '../utils/SlideImages'
import { sliderData } from '../../assets/silderData'

const Home =()=>{

    return(
        <section>
        <Container fluid className='home-section1'>
            
            <div  fluid className='p1'>
                <p >The story about the company is 
                    just live the dream and doing what
                    are good for you!
                </p>
               
            </div>
            <div className='img1'>      
            <img src={p2} alt='img' width="600" height="600"/>
            </div>
            
         
        </Container>

        <Container fluid className='home-section2'>

        <h1 className='h1'>DREAM. CREATE . HUG </h1>

        <h2 style={{color:"white"}}>Meet Natali </h2>
        <div className='p2'>
        <p>Natalie has been making dolls since she was young and she turns her love into business</p>

        </div>

        
            
        </Container >

         <Container fluid className='home-section3'>

        <h1 className='h2'>  People Are Saying:</h1>
            
      
     
        <div>
        <SlideImages slides={sliderData} />

        </div>

        </Container>
        </section>
    )

}

export default Home