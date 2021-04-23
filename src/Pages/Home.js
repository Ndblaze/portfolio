import React, { useState, useEffect } from 'react'
import About from '../components/About'
import Service from '../components/Services'
import First from '../components/Home'
import Skills from '../components/Skills'
import Project from '../components/Projects'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar';

const Home = () => {
    
    const [scroll, setScroll] = useState(false);


    const handleScroll = () =>{
         window.addEventListener("scroll", () => {
             if(window.scrollY > 100 ){
                setScroll(true);
             }else{
                setScroll(false);   
             }
         });
    }

    useEffect(() => {
        
        handleScroll();
        
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])

    return (
        <div>
            <Navbar scroll={scroll}/>
            <First />
            <About />
            <Service />
            <Skills />
            <Project />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
