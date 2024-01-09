import React from 'react'
import './about.css'
import ME from '../../assets/me-drawing.png';
import {BsSpotify} from 'react-icons/bs';
import ALBUM from '../../assets/newjeans.png';

const About = () => {
  return (
    <section id='about'>
       <div className="container about-container">
        <div className="about-me-left">
          <h2 class="intro"> I'm Brian.</h2>
          <h6 class="about-text">Hey there, it’s nice to meet you! I'm Brian, a passionate computer engineering student and a senior at Rutgers University. My journey into the world of computers started back in high school when I didn’t know what I wanted to be until I had the opportunity to explore various majors. It was then that I stumbled upon the fascinating field of computers and its applications, and since then, my love for it has only grown.</h6>
          <h6 class="about-text">Throughout my time at university, I've been fortunate to work on diverse projects that have allowed me to develop my skills. From creating responsive user interfaces to diving into the world of data analytics, I've been driven by a desire to craft concise solutions to complex problems.</h6>
          <h6 class="about-text">Despite being fairly new to the industry, I've honed my focus on delivering efficient and maintainable code that empowers users and simplifies their lives. My passion for software engineering stems from its transformative power – the ability to impact millions of lives and multiple businesses with just a few lines of code. This profound influence, coupled with my insatiable curiosity to explore, fuels my constant quest for learning and growth.</h6>
          <h6 class="about-text">When I'm not at my computer, you'll likely find me staying active with workouts, enjoying some mobile gaming, or indulging in my seemingly random interest for interior design by flipping through the latest Architectural Digest magazine.</h6>
        </div>
        <div className="about-me-right">
          <img className="me-drawing" src={ME}/>
          <div className="spotify-component">
            <BsSpotify class="spotify-icon"/>
            <div class="spotify-text">
              <h6>Currently on repeat</h6>
              <a class="fav-song" href="https://open.spotify.com/track/5sdQOyqq2IDhvmx2lHOpwd?si=a3eba4bc5e9b4599" target="_blank">
                Super Shy by NewJeans
              </a>
            </div>
            <img class="album-cover" src={ALBUM}></img>
          </div>
        </div>
       </div>
    </section>
  )
}

export default About