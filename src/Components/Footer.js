import React from 'react'
import './sass-files/footer.scss'
import logogreen from './images/logo-green.png'

function Footer() {
  return (
    <>
        <div className="footer-container flex flex-row items-center justify-evenly">
            <div class="">
                  <img src={logogreen} alt="" /><br></br>
                  <p class="text-left">Lorem ipsum dolor sit amet, consectetur<br></br> adipisicing elit. Culpa consectetur assumenda est<br></br> unde animi. Repellat quibusdam et ad aut<br></br> molestias, facere maxime expedita aperiam sint.</p>
            </div>

            <div class="text-left">
                <h5 class="text-green font-bold text-xl">Contact</h5>
                <p><i class="fa fa-address-card-o text-green" aria-hidden="true"></i>  #Koramangala, Banglore<br></br>Karnataka, INDIA</p><br></br>
                <p><i class="fa fa-envelope-o text-green" aria-hidden="true"></i>  youremail@yourdomain.com</p>
                <p><i class="fa fa-volume-control-phone text-green" aria-hidden="true"></i> +88 (0) 101 0000 000<br></br>
                  +88 (0) 202 0000 001</p>
            </div>
        
            <div class="">
            <h3 class="text-green font-bold text-xl">Quick Links</h3>
                  <ul class="flex flex-col text-left">
                    <li><i class="fa fa-angle-right text-green" aria-hidden="true"></i> Online Classes</li>
                    <li><i class="fa fa-angle-right text-green" aria-hidden="true"></i> Events</li>
                    <li><i class="fa fa-angle-right text-green" aria-hidden="true"></i> Contact Us</li>
                    <li><i class="fa fa-angle-right text-green" aria-hidden="true"></i> Login</li>
                    <li><i class="fa fa-angle-right text-green" aria-hidden="true"></i> Terms & Conditions</li>
                  </ul>
              </div>

              <ul class="flex flex-col text-left">
                    <li><i class="fa fa-angle-right text-green" aria-hidden="true"></i> Class Room Classes</li>
                    <li><i class="fa fa-angle-right text-green" aria-hidden="true"></i> About Us</li>
                    <li><i class="fa fa-angle-right text-green" aria-hidden="true"></i> Faq</li>
                    <li><i class="fa fa-angle-right text-green" aria-hidden="true"></i> Sign Up</li>
                    <li><i class="fa fa-angle-right text-green" aria-hidden="true"></i> Privacy Policy</li>
                  </ul>
              </div>
              <div class="flex flex-row items-center justify-around text-[#797979]">
               <p><i class="fa fa-twitter text-gray" aria-hidden="true" ></i> <i class="fa fa-facebook" aria-hidden="true"></i> <i class="fa fa-google-plus" aria-hidden="true"></i> <i class="fa fa-linkedin" aria-hidden="true"> <t></t><t></t> <i class="fa fa-instagram" aria-hidden="true"></i></i></p>
              <p class="text-[#797979] text-sm"><i class="fa fa-copyright" aria-hidden="true"></i> Copyright 2017 Konnect plugins</p>
              </div>
    </>
  )
}

export default Footer