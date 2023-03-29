import React from 'react'
import course1 from './images/course1.jpg'
import course2 from './images/course2.jpg'
import course3 from './images/course3.jpg'
import Coursecard from './Coursecard'

function Courses() {
  return (
    <>
       <div className="courses-container w-full h-screen flex flex-col justify-center gap-4">
       <h3 class="h3-statistics text-2xl">OFFERING COURSES</h3>
    <p class='mb-4 p-statistics text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque<br></br> erat, ultrices cursus nisi at, hendrerit tristique.</p>

        <div class="flex flex-row">
          <Coursecard course={course1}/>
          <Coursecard course={course2}/>
          <Coursecard course={course3}/>
        </div>
        </div>
    </>
  )
}

export default Courses