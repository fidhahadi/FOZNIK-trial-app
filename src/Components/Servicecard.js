import React from 'react'

function Servicecard({
    name,
    description,
    icon
  }) {
  return (
<>
<div class="max-w-sm rounded overflow-hidden shadow-inner">
  <div class="flex items-center justify-between flex-col mb-3 max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <img class="" src={icon} alt="" />
    <div class="font-bold text-xl mb-2 text-[#5dc560]">{name}</div>
    <p class="text-gray-700 text-base">
    {description}   </p>
  </div>
</div>
</>
  );
}
export default Servicecard