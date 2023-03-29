import React from 'react'
import './sass-files/whoweare.scss'
import studentwhoweare from './images/students-whoweare.jpeg'

function Whoweare() {
  return (
    <>
      <div class="whoweare-container">
      
            <h3 class="h3-statistics text-2xl">WHO WE ARE</h3>
      
        <div class="flex flex-row items-center ">
            <div>
              <h3 class="text-[#5dc560] text-xl font-bold" >ABOUT EDUCOURSE TEMPLATE</h3>
              <p class="mb-3 font-light text-gray-500 dark:text-gray-400">Curabitur ut est a mi fermentum tristique. Aliquam et ante odio. Donec<br></br> elementum odio eget ex porta, vel laoreet nisl fermentum. Nam risus purus,<br></br> hendrerit id placerat sit amet, tempor a urna. Maecenas id quam et dolor<br></br> facilisis pulvinar.</p>
              <p class="font-light text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br></br> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br></br> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo<br></br> consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum<br></br> dolore eu fugiat nulla pariatur.</p><br></br>
              <button type="button" class="text-white bg-green hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 focus:outline-none font-thin">VIEW MORE</button>

            </div>  
            <div className='whoweare-image'>
              <img src={studentwhoweare} alt=""/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Whoweare

            