import React from 'react'
import Image from 'next/image';
import CustomerService from '@/images/CustomerSupport.svg';
import ServiceSolution from '@/images/ServiceSolutions.svg';
import CustomerEngagement from '@/images/CustomerEngagement.svg';

function Revolutionize() {
  return (
    <div className="flex flex-col items-center px-16 py-20 bg-white max-md:px-5">
    <div className="mt-8 text-base font-semibold leading-6 text-center text-zinc-900">
      Revolutionize
    </div>
    <div className="mt-4 text-5xl font-bold text-center leading-[58px] text-zinc-900 w-[768px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
      Transforming Customer Service Experience
    </div>
    <div className="mt-6 text-lg leading-7 text-center text-zinc-900 max-md:max-w-full">
      AI-powered voice assistants that provide instant support
    </div>
    <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-8 max-md:max-w-full">
            <div className="pl-6 bg-white border border-solid border-zinc-900 max-md:pl-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto text-base text-zinc-900 max-md:mt-10">
                    <div className="font-semibold leading-[150%]">
                      Simplify
                    </div>
                    <div className="mt-2 text-2xl font-bold leading-9">
                      Efficient Customer Service Solutions
                    </div>
                    <div className="mt-2 leading-6">
                      Automate customer inquiries and deliver personalized
                      support with AI voice assistants.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
                <Image className="grow self-stretch w-full aspect-[0.87] max-md:mt-6" src={ServiceSolution} alt="ServiceSolution"  />
                </div>
              </div>
            </div>
            <div className="pl-6 mt-8 bg-white border border-solid border-zinc-900 max-md:pl-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto text-base text-zinc-900 max-md:mt-10">
                    <div className="font-semibold leading-[150%]">
                      Enhance
                    </div>
                    <div className="mt-2 text-2xl font-bold leading-9">
                      Streamline Customer Support Processes
                    </div>
                    <div className="mt-2 leading-6">
                      Optimize customer interactions and reduce wait times
                      with AI voice assistants.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
                <Image className="grow self-stretch w-full aspect-[0.87] max-md:mt-6" src={CustomerService} alt="CustomerService"  />
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow self-stretch w-full text-base leading-6 bg-white border border-solid border-zinc-900 text-zinc-900 max-md:mt-8 max-md:max-w-full">
            <div className="flex flex-col justify-center px-12 py-16 max-md:px-5 max-md:max-w-full">
              <div className="font-semibold max-md:max-w-full">Empower</div>
              <div className="mt-2 text-4xl font-bold leading-10 max-md:max-w-full">
                Personalized Customer Engagement
              </div>
              <div className="mt-6 leading-6 max-md:max-w-full">
                Deliver exceptional customer experiences with AI voice
                assistants that offer personalized support and gather valuable
                feedback.
              </div>
              <div className="justify-center self-start px-6 py-3 mt-8 text-white whitespace-nowrap bg-orange-400 max-md:px-5">
                Contact
              </div>
            </div>
            <Image className="w-full aspect-[1.79] max-md:max-w-full" src={CustomerEngagement} alt="CustomerService"  />
           
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Revolutionize