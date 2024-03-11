import React from 'react'
import Image from 'next/image';
import PersonalizedCustomerSupport from '@/images/PersonalizedCustomerSupport.svg';
import ConsistentCommunication from '@/images/ConsistentCommunication.svg';
import MultilingualSupport from '@/images/MultilingualSupport.svg';

function RevolutionizeAsistans() {
  return (
    <div className="flex flex-col items-center px-16 py-20 bg-indigo-600 max-md:px-5">
    <div className="mt-8 text-base font-semibold leading-6 text-center text-white">
      Revolutionize
    </div>
    <div className="mt-4 text-5xl font-bold text-center text-white leading-[58px] w-[768px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
      Transforming Customer Service with AI Voice Assistants
    </div>
    <div className="mt-6 text-lg leading-7 text-center text-white w-[768px] max-md:max-w-full">
      Our AI voice assistants provide instant support, answer FAQs 24/7, and
      personalize interactions for a seamless customer experience.
    </div>
    <div className="justify-center self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-center text-white max-md:mt-10">
          
              <Image className="w-full aspect-[1.69]" src={PersonalizedCustomerSupport} alt="PersonalizedCustomerSupport"  />
            <div className="mt-8 text-3xl font-bold leading-10">
              Efficient and Personalized Customer Support
            </div>
            <div className="mt-6 text-base leading-6">
              Our AI voice assistants handle repetitive tasks, reducing wait
              times and freeing up human agents to focus on complex issues.
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-center text-white max-md:mt-10">
          <Image className="w-full aspect-[1.69]" src={ConsistentCommunication} alt="ConsistentCommunication"  />
          
            <div className="mt-8 text-3xl font-bold leading-10">
              Scalable and Consistent Communication
            </div>
            <div className="mt-6 text-base leading-6">
              As your website grows, our AI voice assistants can easily handle
              increased customer inquiries, providing consistent and accurate
              information.
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-center text-white max-md:mt-10">
          <Image className="w-full aspect-[1.69]" src={MultilingualSupport} alt="MultilingualSupport"  />
            <div className="mt-8 text-3xl font-bold leading-10">
              Global Reach with Multilingual Support
            </div>
            <div className="mt-6 text-base leading-6">
              Cater to a wider audience and provide global customer service
              with our AI voice assistants supporting multiple languages.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RevolutionizeAsistans