import Love from '../../../components/images/love.png'
import Image from 'next/image'
import Love2 from '../../../components/images/love2.png'
import Footer from '@/components/ui/footer'


export const metadata = {
  title: 'Airdrop',
  description: '$VAL Airdrop',
}

import Link from 'next/link'

export default function SignIn() {
  const tweetText = "She asked if I could be her $Val, and I said yes. Click here to get a $Val";
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

  return (
    <><section className="bg-gradient-to-b from-black to-[#ef067a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

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
              className="absolute w-10 animate-spin top-[17rem] right-[7rem]" alt={''} />


          </div>

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 text-[#ef067a]">We have something for you</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-white text-xl font-medium mb-1" htmlFor="email">Submit Wallet Adress</label>
                  <input id="wallet" type="wallet" className="form-input w-full text-gray-800" placeholder="Enter your Wallet address" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="block text-white text-xl font-medium mb-1" htmlFor="password">Twitter Handle</label>

                  </div>
                  <input id="password" type="text" className="form-input w-full text-gray-800" placeholder="Enter your Twitter Handle" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  {/* <div className="flex justify-between">
      <label className="flex items-center">
        <input type="checkbox" className="form-checkbox" />
        <span className="text-gray-600 ml-2">Keep me signed in</span>
      </label>
    </div> */}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  {/* <a
                    
                  
                  > */}
                    <a href={tweetUrl}
                    target="_blank"
                    rel="noopener noreferrer" className="btn text-white text-xl bg-[#ec4297] hover:bg-[#ef067a] w-full">Share Tweet</a>
                  {/* </a> */}
                </div>
              </div>
            </form>
            {/* <div className="flex items-center my-6">
      <div className="border-t border-gray-300 grow mr-3" aria-hidden="true"></div>
      <div className="text-gray-600 italic">Or</div>
      <div className="border-t border-gray-300 grow ml-3" aria-hidden="true"></div>
    </div>
   <form>
      <div className="flex flex-wrap -mx-3 mb-3">
        <div className="w-full px-3">
          <button className="btn px-0 text-white bg-gray-900 hover:bg-gray-800 w-full relative flex items-center">
            <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.993-2.683-.993-.398-.895-.895-1.193-.895-1.193-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.895 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.975 0-.895.298-1.59.795-2.087-.1-.2-.397-.994.1-2.087 0 0 .695-.2 2.186.795a6.408 6.408 0 011.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.795 2.186-.795.398 1.093.199 1.888.1 2.087.496.596.795 1.291.795 2.087 0 3.08-1.889 3.677-3.677 3.875.298.398.596.895.596 1.59v2.187c0 .198.1.497.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0z" />
            </svg>
            <span className="flex-auto pl-16 pr-8 -ml-16">Continue with GitHub</span>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full px-3">
          <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
            <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
            </svg>
            <span className="flex-auto pl-16 pr-8 -ml-16">Continue with Google</span>
          </button>
        </div>
      </div>
    </form>
    <div className="text-gray-600 text-center mt-6">
      Don't you have an account? <Link href="/signup" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign up</Link>
    </div> */}
          </div>

        </div>
      </div>
    </section>
      <Footer /></>
  )
}
