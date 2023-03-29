import React from 'react'
import Servicecard from './Servicecard'
import './sass-files/services.scss'
import classroom from './images/classroom.png'
import certificate from './images/certificate.png'
import jobsupp from './images/job-support.png'

function Services() {
  return (
    <>
        <div class="services-container">
        <Servicecard icon={classroom} name="Experienced Trainers" description="Curabitur ut est a mi fermentum tristique. Aliquam et ante odio. Donec elementum odio eget ex porta, vel laoreet nisl fermentum."  />
        <Servicecard icon={certificate} name="Certification" description="    Curabitur ut est a mi fermentum tristique. Aliquam et ante odio. Donec elementum odio eget ex porta, vel laoreet nisl fermentum." />
        <Servicecard icon={jobsupp} name="Job Support" description="    Curabitur ut est a mi fermentum tristique. Aliquam et ante odio. Donec elementum odio eget ex porta, vel laoreet nisl fermentum." />
        </div>
    </>
  )
}

export default Services