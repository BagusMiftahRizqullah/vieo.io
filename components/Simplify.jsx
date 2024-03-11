import React from 'react'
import Image from 'next/image';
import Streamline from '@/images/Streamline.svg';

function Simplify() {
  return (
    <div className="flex flex-col justify-center px-16 py-20 bg-white max-md:px-5">
      <div className="mt-8 max-md:mr-1 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-base leading-6 text-zinc-900 max-md:mt-10 max-md:max-w-full">
              <div className="font-semibold text-center max-md:max-w-full">
                Simplify
              </div>
              <div className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Streamline your customer service with AI
              </div>
              <div className="mt-6 text-lg leading-7 max-md:max-w-full">
                Integrate our AI voice assistant with your website in a matter
                of seconds. Provide instant support, reduce wait times, and
                improve customer satisfaction.
              </div>
              <div className="justify-center self-start px-6 py-3 mt-10 text-white whitespace-nowrap bg-white rounded-md border border-white border-solid max-md:px-5">
                API Reference
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <Image className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full" src={Streamline} alt="Streamline"  />
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Simplify