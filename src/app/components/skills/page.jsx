import React from 'react';
import Marquee from "react-fast-marquee";
const SkilPage = () => {
    return (
      <section id='skill-section'>
          <div  className=' bg-color3 py-5 mt-10  '>
           <h1 className='text-center text-5xl  pt-10 font-font1 font-extrabold      bg-gradient-to-r from-color1 to-yellow-50 text-transparent bg-clip-text '>My skills</h1>
           <div className='px-10 flex flex-wrap gap-16 mt-8'>
            <Marquee direction='right' className=''>
          <div className=' flex gap-10 mt-3'>
          <div className='group'>
                <div className='w-32 h-32 border-2 hover:scale-105 border-color4 hover:border-color1 transition duration-300 p-4'>
                <img className='' src="js.png" alt="" />
                </div>
                <p className='text-yellow-50 font-font1 text-center  text-xl'>JavaScript</p>
            </div>
            <div className='group'>
                <div className='w-32 h-32 border-2 hover:scale-105 border-color4 hover:border-color1 transition duration-300 p-4'>
                <img className='' src="react.png" alt="" />
                </div>
                <p className='text-yellow-50 font-font1  text-xl'>React.js</p>
            </div>
            <div className='group'>
                <div className='w-32 h-32 border-2 hover:scale-105 border-color4 hover:border-color1 transition duration-300 p-4'>
                <img className='' src="next.svg" alt="" />
                </div>
                <p className='text-yellow-50 font-font1  text-xl'>Next.js</p>
            </div>
            <div className='group'>
                <div className='w-32 h-32 border-2 hover:scale-105 border-color4 hover:border-color1 transition duration-300 p-4'>
                <img className='' src="mongo.png" alt="" />
                </div>
                <p className='text-yellow-50 font-font1  text-xl'>MongoDB</p>
            </div>
            <div className='group'>
                <div className='w-32 h-32 border-2 hover:scale-105 border-color4 hover:border-color1 transition duration-300 p-4'>
                <img className='' src="Html.png" alt="" />
                </div>
                <p className='text-yellow-50 font-font1  text-xl'>HTML</p>
            </div>
            <div className='group'>
                <div className='w-32 h-32 border-2 hover:scale-105 border-color4 hover:border-color1 transition duration-300 p-4'>
                <img className='' src="css.png" alt="" />
                </div>
                <p className='text-yellow-50 font-font1  text-xl'>CSS</p>
            </div>
            <div className='group'>
                <div className='w-32 h-32 border-2 hover:scale-105 border-color4 hover:border-color1 transition duration-300 p-4'>
                <img className='' src="tailwinds.png" alt="" />
                </div>
                <p className='text-yellow-50 font-font1  text-xl'>Tawilwinds</p>
            </div>
          </div>
            </Marquee>
            <Marquee direction='left' className=' -mt-10 lg:-mt-5'>
          <div className=' flex gap-8 mt-3'>
          <div className='group'>
                <div className='w-32 h-32 border-2 hover:scale-105 border-color4 hover:border-color1 transition duration-300 p-4'>
                <img className='' src="js.png" alt="" />
                </div>
                <p className='text-yellow-50 font-font1 text-center  text-xl'>JavaScript</p>
            </div>
            <div className='group'>
                <div className='w-32 h-32 border-2 hover:scale-105 border-color4 hover:border-color1 transition duration-300 p-4'>
                <img className='' src="react.png" alt="" />
                </div>
                <p className='text-yellow-50 font-font1  text-xl'>React.js</p>
            </div>
            <div className='group'>
                <div className='w-32 h-32 border-2 hover:scale-105 border-color4 hover:border-color1 transition duration-300 p-4'>
                <img className='' src="next.svg" alt="" />
                </div>
                <p className='text-yellow-50 font-font1  text-xl'>Next.js</p>
            </div>
            <div className='group'>
                <div className='w-32 h-32 border-2 hover:scale-105 border-color4 hover:border-color1 transition duration-300 p-4'>
                <img className='' src="mongo.png" alt="" />
                </div>
                <p className='text-yellow-50 font-font1  text-xl'>MongoDB</p>
            </div>
            <div className='group'>
                <div className='w-32 h-32 border-2 hover:scale-105 border-color4 hover:border-color1 transition duration-300 p-4'>
                <img className='' src="Html.png" alt="" />
                </div>
                <p className='text-yellow-50 font-font1  text-xl'>HTML</p>
            </div>
            <div className='group'>
                <div className='w-32 h-32 border-2 hover:scale-105 border-color4 hover:border-color1 transition duration-300 p-4'>
                <img className='' src="css.png" alt="" />
                </div>
                <p className='text-yellow-50 font-font1  text-xl'>CSS</p>
            </div>
            <div className='group'>
                <div className='w-32 h-32 border-2 hover:scale-105 border-color4 hover:border-color1 transition duration-300 p-4'>
                <img className='' src="tailwinds.png" alt="" />
                </div>
                <p className='text-yellow-50 font-font1  text-xl'>Tawilwinds</p>
            </div>
          </div>
            </Marquee>
           </div>
        </div>
      </section>
    );
};

export default SkilPage;