import React from 'react'
//import back from './background.jpg'
import './sass-files/intro.scss'
import student from './images/student-1.png'

function Introduction() {
  return (
    <>
    <div class="introduction-container">
        <div class="intro flex flex-row justify-center">
            <div class="online-training">
            <h3 class="text-3xl font-bold text-[#5dc560]">Online Classroom and Training</h3><br></br>
            <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt<br></br> mauris. Etiam arcu enim, laoreet vitae orci vel, rutrum feugiat nibh. Integer<br></br> feugiat ligula tellus, non pulvinar justo pharetra eu. Nullam vehicula lorem<br></br> ut diam tincidunt sagittis. Morbi est ligula, posuere in laoreet ac, porta<br></br> porttitor dui</p>
            <br></br>
            <button type="button" class="text-white bg-green hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 focus:outline-none font-thin">SHOW MORE</button>
            </div>
            <div class="online-image">
                <img class="object-scale-down w-65 h-50" src={student} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Introduction