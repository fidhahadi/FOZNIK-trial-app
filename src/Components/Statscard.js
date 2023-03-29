import React from 'react'

function Statscard({
    no,
    stats,
    icons,
    sampletext,
    imageSize=30
}) {

  return (
    <div className='stats'>
        <div class="flex items-center flex-col mb-3 max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
        className=""
        src={icons}
        alt={sampletext}
        width={imageSize}
        height={imageSize}
      />      
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400"><strong class="font-semibold text-[#5dc560]">{no}</strong>{stats}</p>
      </div>
        </div>  
  );
}

export default Statscard