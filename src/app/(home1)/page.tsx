import React from 'react';
import Herobanner3 from '../Components/HeroBanner/Herobanner3';
import Brand3 from '../Components/Brand/Brand3';
import About1 from '../Components/About/About2';
import Services3 from '../Components/Services/Services3';
import Project3 from '../Components/Project/Project3';
import Marquee2 from '../Components/Marquee/Marquee2';
import Cta from '../Components/Cta/Cta';
import Testimonial3 from '../Components/Testimonial/Testimonial3';
import OurTaxi2 from '../Components/OurTaxi/OurTaxi2';
import Pricing2 from '../Components/Pricing/Pricing2';
import OurServices1 from '../Components/OurServices/OurServices1';
import HowWeDo from '../Components/HowWeDo/HowWeDo';
import Faq1 from '../Components/Faq/Faq1';
import Contact1 from '../Components/Contact/Contact1';
import Blog1 from '../Components/Blog/Blog1';


const page = () => {
    return (
        <div>
            <Herobanner3></Herobanner3>
            <OurTaxi2></OurTaxi2>
            <About1></About1>
            <OurServices1></OurServices1> 
            <HowWeDo></HowWeDo> 
            <Faq1></Faq1>
            <Testimonial3></Testimonial3>
            <Contact1></Contact1>


            {/* <Project3></Project3>

            <Services3></Services3>      
            
            <Brand3></Brand3>  
            
                
               
                   
            
            <Marquee2></Marquee2>
            <Cta></Cta>
            
            
            <Pricing2></Pricing2> */}
            

        </div>
    );
};

export default page;