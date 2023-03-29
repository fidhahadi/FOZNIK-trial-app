import React from 'react'
import './sass-files/statistics.scss'
import Statscard from './Statscard'
import tool from './images/tool.png'
import success from './images/success.png'
import expert from './images/expert.png'
import clients from './images/clients.png'

function Statistics() {
  return (
  <>
    <div class="statistics-container flex flex-col">
        <div class="stats-header w-full h-screen flex flex-col items-center justify-center gap-4">
            <h3 class="h3-statistics text-2xl">EDUCOURSE STATS</h3>
            <p class='mb-2 p-statistics text-lg text-[#666666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque<br></br> erat, ultrices cursus nisi at, hendrerit tristique.</p>
        </div>
        <div class="flex-row items-center h-screen gap-3">
          <Statscard icons={tool} no="500 +" stats="professionals trained"/>
          <Statscard icons={expert} no="10+ Years" stats=" of Experience"/>
          <Statscard icons={clients} no="15 + " stats="Companies Association"/>
          <Statscard icons={success} no="99% " stats="Job Guarantee"/>
        </div>
    </div>
  </>
  )
}

export default Statistics