"use client"
import React, { useRef } from 'react';
import Love from './images/love.png'
import Image from 'next/image'
import Love2 from './images/love2.png'

export default function Newsletter() {
  const inputRef = useRef<HTMLInputElement>(null);

  const copyContractAddress = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand('copy');
    }
  };

  return (
    <section id='htb'>
      <div className="max-w-full bg-[#ef067a] py-10 mx-auto px-4 sm:px-6">
        <div className="pb-12 ] md:pb-20">
          {/* CTA box */}
          <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">
            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
           
            </div>
            <div className="relative flex flex-col  lg:flex-row justify-center items-center">
              {/* CTA content */}
              <div className="text-center lg:text-center lg:max-w-2xl">
                <h3 className="h3 text-white mb-2">$VAL Tokenomics</h3>
                <ol>
                <p className="text-gray-300 text-lg mb-6">Token name: Valentine</p>
                <p className="text-gray-300 text-lg mb-6">Ticker: $Val </p>
                <p className="text-gray-300 text-lg mb-6">Total supply: 10.000.000 $Val  </p>
                </ol>
                {/* CTA form */}
                <form className="w-full align-center lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xl mx-auto sm:max-w-2xl lg:mx-0">
                    <input
                      ref={inputRef}
                      type="text"
                      className="form-input w-[700px] appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                      placeholder="Contract address…"
                      defaultValue="Contract address here" // Provide your contract address here
                      readOnly
                      aria-label="Contract address"
                    />
                    <button
                      type="button"
                      onClick={copyContractAddress}
                      className="btn text-white bg-[#cd3983] w-2xl hover:bg-[#ef067a] shadow"
                    >
                      <svg className="h-5 w-5" fill='white' viewBox="0 0 29 29">
                        <path d="M4 8a1 1 0 0 1 1-1h18V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h1V8z"></path>
                        <path d="M7 9h19a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1z"></path>
                      </svg>
                      </button>
                  </div>
                
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
