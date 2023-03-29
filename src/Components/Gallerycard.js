import React from 'react'

function Gallerycard({
    gallery,
    imageSize
}) {
  return (
    <>
    <img class="h-60 w-65 flex flex-row bg-white" src={gallery} alt=""/>
    </>
  )
}

export default Gallerycard