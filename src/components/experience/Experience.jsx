import React from 'react'
import './experience.css'
import {RiArrowRightSLine} from 'react-icons/ri'

const Experience = () => {
  return (
    <section id='experience'>
      <div className="container experience-container">
        <div className="experience-left">
          <h2>my experience</h2>
          <div className="frontend-experience">
            <h4>Frontend Development</h4>
            <div className="experience-list">
              <article className="experience-item">
                <RiArrowRightSLine className="experience-item-icon"/>
                <div>
                  <h5>HTML</h5>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-item">
                <RiArrowRightSLine className="experience-item-icon"/>
                <div>
                  <h5>CSS</h5>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-item">
                <RiArrowRightSLine className="experience-item-icon"/>
                <div>
                  <h5>JavaScript</h5>
                  <small className="text-light">Beginner</small>
                </div>
              </article>
              <article className="experience-item">
                <RiArrowRightSLine className="experience-item-icon"/>
                <div>
                  <h5>BootStrap</h5>
                  <small className="text-light">Beginner</small>
                </div>
              </article>
              <article className="experience-item">
                <RiArrowRightSLine className="experience-item-icon"/>
                <div>
                  <h5>Tailwind</h5>
                  <small className="text-light">Beginner</small>
                </div>
              </article>
              <article className="experience-item">
                <RiArrowRightSLine className="experience-item-icon"/>
                <div>
                  <h5>React</h5>
                  <small className="text-light">Beginner</small>
                </div>
              </article>
            </div>
          </div>
          <div className="backend-experience">
            <h4>Backend Development</h4>
            <div className="experience-list">
            <article className="experience-item">
                <RiArrowRightSLine className="experience-item-icon"/>
                <div>
                  <h5>Java</h5>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-item">
                <RiArrowRightSLine className="experience-item-icon"/>
                <div>
                  <h5>JavaScript</h5>
                  <small className="text-light">Beginner</small>
                </div>
              </article>
              <article className="experience-item">
                <RiArrowRightSLine className="experience-item-icon"/>
                <div>
                  <h5>Python</h5>
                  <small className="text-light">Beginner</small>
                </div>
              </article>
              <article className="experience-item">
                <RiArrowRightSLine className="experience-item-icon"/>
                <div>
                  <h5>MySQL</h5>
                  <small className="text-light">Beginner</small>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="experience-right">
          <div className="real-experience">
            <h6 className="timeline">Feb 2023 — May 2023</h6>
            <article class="experience-info">
              <h5 className="experience-title">Software Engineering Fellow • Rutgers Blueprint</h5>
              <h6 className="experience-description">Utilized third-party libraries and implemented React hooks to effectively manage state and facilitate data sharing between components in React projects by following a comprehensive syllabus. Worked collaboratively with a team of fellows to successfully develop a custom webpage with advanced functionality, which was later presented to industry professionals. </h6>
              <div className="languages-used">
                <div className="language">HTML</div>
                <div className="language">CSS</div>
                <div className="language">JavaScript</div>
                <div className="language">React</div>
                <div className="language">Parcel.js</div>
                <div className="language">Material UI</div>
              </div>
            </article>
          </div>
          <div className="real-experience">
            <h6 className="timeline">May 2021 — Dec 2021</h6>
            <article class="experience-info">
              <h5 className="experience-title">Data Analytics Extern • Robert Wood Johnson University Hospital</h5>
              <h6 className="experience-description">Conducted analysis on patient and caregiver medication preferences. Utilized Python and its libraries in Google Colaboratory and developed visualization models and interactive analysis reports. Collaborated with project team to implement data-cleansing algorithms and variable filters to reduce survey data size.</h6>
              <div className="languages-used">
                <div className="language">Python</div>
                <div className="language">pandas</div>
                <div className="language">NumPy</div>
                <div className="language">Matplotlib</div>
                <div className="language">seaborn</div>
                <div className="language">Colaboratory</div>
              </div>
            </article>
          </div>
        </div>

      </div>
  </section>
  )
}

export default Experience