import Head from 'next/head'

import { useState } from 'react'

export default function Home() {
  const [riskCategory, setRiskCategory] = useState('')

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Head>
        <title>MLTF</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="h-14 w-full flex justify-center items-center sticky top-0 z-[100] border-b-[1px] bg-[#004c42] text-white">
        <div className="w-full max-w-[1024px] h-full flex items-center">
          <div className="flex justify-start items-center gap-x-5 h-full px-4 button-on-dark">
            <h1 className="text-4xl">FCG</h1>
            <p className="text-sm font-light">MLTF</p>
          </div>
          {/* <Navbar /> */}
        </div>
      </header>

      {/* <main className="w-full lg:min-w-[1024px] lg:w-[75%] p-4 flex flex-col lg:flex-row gap-5"> */}
      <main className="w-full max-w-[512px] lg:max-w-[1024px] lg:grow p-4 flex flex-col items-start lg:flex-row gap-8 lg:border-x-[1px]">
        <div className="lg:hidden button-on-light ">
          Add <span className="text-xl leading-3">+</span>
        </div>
        <div className="hidden lg:flex flex-col flex-1 border-[1px] divide-y-[1px]">
          <div className="bg-[#004c42] text-white p-2">Add risk</div>
          <form action="" className="w-full flex flex-col divide-y-[1px]">
            <fieldset className="flex flex-col gap-1 ">
              <div className="w-full px-2 relative ">
                <label
                  htmlFor="riskCategory"
                  className="px-2 text-gray-500 text-xs leading-3 font-light absolute top-1 left-0 pointer-events-none"
                >
                  {riskCategory ? 'Risk Category' : ''}
                </label>
                <select
                  name="riskCategory"
                  id="riskCategory"
                  className={`w-full outline-none px-2 cursor-pointer hover:underline ${
                    riskCategory ? 'pt-5 pb-1' : 'py-3 text-gray-500'
                  }`}
                  value={riskCategory}
                  onChange={({ target }) => setRiskCategory(target.value)}
                >
                  <option value="" className="  text-gray-500 italic">
                    Risk Category
                  </option>
                  <option value="Hello" className="text-black">
                    Hej
                  </option>
                  <option value="På" className="text-black">
                    På
                  </option>
                  <option value="Dig" className="text-black">
                    Dig
                  </option>
                  <option value="Du" className="text-black">
                    Du
                  </option>
                </select>
              </div>
            </fieldset>
            <fieldset className="flex flex-col gap-1 ">
              <div className="w-full px-2 relative">
                <label
                  htmlFor="riskCategory"
                  className="px-2 text-gray-500 text-xs leading-3 font-light absolute top-1 left-0 pointer-events-none"
                >
                  {riskCategory ? 'Risk Category' : ''}
                </label>
                <select
                  name="riskCategory"
                  id="riskCategory"
                  className={`w-full outline-none px-2 cursor-pointer hover:underline ${
                    riskCategory ? 'pt-5 pb-1' : 'py-3 text-gray-500'
                  }`}
                  value={riskCategory}
                  onChange={({ target }) => setRiskCategory(target.value)}
                >
                  <option value="" className="  text-gray-500 italic">
                    Risk Category
                  </option>
                  <option value="Hello" className="text-black">
                    Hej
                  </option>
                  <option value="På" className="text-black">
                    På
                  </option>
                  <option value="Dig" className="text-black">
                    Dig
                  </option>
                  <option value="Du" className="text-black">
                    Du
                  </option>
                </select>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="flex-1 w-full border-[1px] flex flex-col divide-y-[1px]">
          <div className="bg-[#004c42] text-white p-2">Selected risks</div>
          <div className="py-1 px-2 hover:bg-[#e5d3b2] hover:bg-opacity-20">
            <h3 className="font-semibold">Risk Category</h3>
            <p className="font-light">Risk Type</p>
          </div>
          <div className="py-1 px-2 hover:bg-[#e5d3b2] hover:bg-opacity-20">
            <h3 className="font-semibold">Risk Category</h3>
            <p className="font-light">Risk Type</p>
          </div>
          <div className="py-1 px-2 hover:bg-[#e5d3b2] hover:bg-opacity-20">
            <h3 className="font-semibold">Risk Category</h3>
            <p className="font-light">Risk Type</p>
          </div>
          <div className="py-1 px-2 hover:bg-[#e5d3b2] hover:bg-opacity-20">
            <h3 className="font-semibold">Risk Category</h3>
            <p className="font-light">Risk Type</p>
          </div>
        </div>
      </main>
    </div>
  )
}
