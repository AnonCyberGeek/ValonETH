'use client'
import VideoThumb from './images/Valentine.png'
import ModalVideo from '@/components/modal-video'
import Love from './images/love.png'
import Image from 'next/image'
import Love2 from './images/love2.png'
import SocialFollowModal from './modal';
import React, { useState } from 'react';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <section className="relative bg-black">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">


      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="static animate-bounce z-[99]">
          <Image
            src={Love}
            className="absolute w-[500px] animate-spin top-[17rem] left-[5rem]" alt={''} />
          <Image
            src={Love2}
            className="absolute w-[200px] animate-bounce top-[8rem] left-[3rem]" alt={''} />
          <Image
            src={Love2}
            className="absolute w-5 animate-spin top-[8rem] right-[8rem]" alt={''} />
          <Image
            src={Love}
            className="absolute w-[300px] animate-spin top-[17rem] right-[5rem]" alt={''} />
          <Image
            src={Love}
            className="absolute w-10 animate-spin top-[17rem] right-[7rem]" alt={''}          />
          

        </div>

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter text-white tracking-tighter mb-4" data-aos="zoom-y-out">Will you be my <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF69B4] to-[#ef067a]">$VAL</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-white mb-8" data-aos="zoom-y-out" data-aos-delay="150">Roses are red,

                Violets are blue,

                On this season of love, I've got a question for you.

                Would you be my $VAL?</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-[#ef067a] hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" onClick={openModal}>Join the Community</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Buy $VAL</a>
                </div>
              </div>
            </div>
          </div>
          <SocialFollowModal isOpen={isModalOpen} onRequestClose={closeModal} />
          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={568}
            thumbHeight={232}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>

      </div>
    </section>
  )
}