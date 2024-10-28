import React from 'react';
import pic1 from "../pics/dev.png"
import pic2 from "../pics/uiux.png"
import pic3 from "../pics/raphix.png"
import pic4 from "../pics/motion.png"
import pic5 from "../pics/photo.png"
import pic6 from "../pics/video.png"

export default function Article3() {
  return (
    <div className='article3'>
      <div className='pudding'>
        <div className='article31'>
          <div>
            <center><h1>The Service We Provider for You</h1></center>
          </div>
          <div className='domain'>
            <div>
                <div className='domains_logo'>
                    <div><img src={pic1} alt="" srcset="" /></div>
                </div>
                <div><h3>Development</h3></div>
                <div><p>Create Platform with the best and coolest quality from us</p></div>
            </div>
           
            <div>
                <div className='domains_logo'>
                    <div><img src={pic2} alt="" srcset="" /></div>
                </div>
                <div><h3>UI/UX Designer</h3></div>
                <div><p>We provide UI/UX Design services and ofcourse with the best quality</p></div>
            </div>
            <div>
                <div className='domains_logo'>
                    <div><img src={pic3} alt="" srcset="" /></div>
                </div>
                <div><h3>Graphik Designer</h3></div>
                <div><p>We provide Graphic Design services, with the best designers</p></div>
            </div>
            <div>
                <div className='domains_logo'>
                    <div><img src={pic4} alt="" srcset="" /></div>
                </div>
                <div><h3>Motion Graphik</h3></div>
                <div><p>Create a platform with the best and coolest quality from us</p></div>
            </div>
            <div>
                <div className='domains_logo'>
                    <div><img src={pic5} alt="" srcset="" /></div>
                </div>
                <div><h3>Photography</h3></div>
                <div><p>We provide Photography services, and ofcourse with the best quality</p></div>
            </div>
            <div>
                <div className='domains_logo'>
                    <div><img src={pic6} alt="" srcset="" /></div>
                </div>
                <div><h3>Videography</h3></div>
                <div><p>Create Platform with the best and coolest quality from us</p></div>
            </div>
            


          </div>
          
        </div>
      </div>
    </div>
  );
}
