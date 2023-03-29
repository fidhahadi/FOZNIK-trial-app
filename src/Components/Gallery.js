import React from 'react'
import './sass-files/gallery.scss'
import Gallerycard from './Gallerycard'
import gallery1 from './images/gallery1.jpg'
import gallery2 from './images/gallery2.jpg'
import gallery3 from './images/gallery3.jpeg'
import gallery4 from './images/gallery4.jpeg'

function Gallery() {
  return (
    <>
        <div className="gallery-container flex justify-center items-center">
        <div class="flex flex-col justify-center items-center">
            <h4 class="text-2xl">GALLERY</h4>
            <p class="text-[#686868] text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque<br></br> erat, ultrices cursus nisi at, hendrerit tristique.</p>
            <div class="flex flex-row bg-white">
            <Gallerycard gallery={gallery1}/>
            <Gallerycard gallery={gallery2}/>
            <Gallerycard gallery={gallery3}/>
            <Gallerycard gallery={gallery4}/>
            </div>
            <br></br>
            <button type="button" class="text-white bg-green hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 focus:outline-none font-thin">VIEW MORE GALLERY</button>

            </div>
        </div>
    </>
  )
}

export default Gallery