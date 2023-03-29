import React from 'react'

function Coursecard({
    course,
    imageSize=70
}) {
  return (
    <>      

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src={course} alt="" />
    <div class="p-5">
    </div>
</div>

      </>

  )
}

export default Coursecard