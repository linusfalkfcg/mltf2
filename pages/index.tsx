import Head from 'next/head'

import {
  MdOutlineAddBox,
  MdOutlineAnalytics,
  MdOutlineListAlt,
  MdOutlineNavigateBefore,
} from 'react-icons/md'

import { useState } from 'react'

export default function Home() {
  const [riskCategory, setRiskCategory] = useState('')
  const [activeTab, setActiveTab] = useState('addRisk')

  const handleTabChange = ({ target }: any) => {
    setActiveTab(target.getAttribute('data-id'))
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-300">
      <Head>
        <title>MLTF</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="h-14 w-full flex justify-center items-center sticky top-0 z-[100] border-b-[1px] bg-[#004c42] text-gray-50">
        <div className="w-full max-w-[1024px] h-full flex items-center">
          <div className="flex justify-start items-center gap-x-5 h-full px-4 button-on-dark">
            <h1 className="text-4xl">FCG</h1>
          </div>
          {/* <Navbar /> */}
        </div>
      </header>
      {/* Actual application */}
      <main className="w-[90%] h-full lg:max-w-[1024px] grow my-4 flex flex-col items-start rounded-xl bg-[#f3f3f3]">
        {/* Header */}
        <div className="h-20 w-full rounded-t-xl flex items-center px-4 shadow-sm border-b-[1px] z-50 bg-gray-50">
          <div className="p-2 rounded-xl hover:bg-[#f3f3f3] cursor-pointer">
            <MdOutlineNavigateBefore size={32} />
          </div>
          <div className="flex flex-col h-full justify-center gap-3 ml-10">
            <h1 className="font-semibold leading-4">MLTF</h1>
            <p className="text-sm leading-3 text-gray-500">
              Calculate the risk blabla
            </p>
          </div>
        </div>
        {/* Main container */}
        <div className="flex w-full grow divide-x-[1px]">
          {/* Sidebar */}
          <div className="w-[25%] bg-gray-50 rounded-bl-xl p-4 border-r-[1px] flex flex-col gap-2">
            <button
              className={`w-full py-2 px-4 rounded-lg  hover:bg-[#f3f3f3] border-[1px] border-transparent hover:border-gray-200 cursor-pointer flex justify-center gap-4 items-center ${
                activeTab === 'addRisk' ? 'bg-[#f3f3f3] border-gray-200' : ''
              }`}
              data-id="addRisk"
              onClick={handleTabChange}
              type="button"
            >
              <MdOutlineAddBox size={24} className="pointer-events-none" />
              <p className="hidden lg:block grow text-left text-sm pointer-events-none">
                Add risk
              </p>
            </button>

            <button
              className={`w-full py-2 px-4 rounded-lg  hover:bg-[#f3f3f3] border-[1px] border-transparent hover:border-gray-200 cursor-pointer flex justify-center gap-4 items-center ${
                activeTab === 'selectedRisks'
                  ? 'bg-[#f3f3f3] border-gray-200'
                  : ''
              }`}
              data-id="selectedRisks"
              onClick={handleTabChange}
              type="button"
            >
              <MdOutlineListAlt size={24} className="pointer-events-none" />
              <p className="hidden lg:block grow text-left text-sm pointer-events-none">
                Selected risks
              </p>
            </button>

            <button
              className={`w-full py-2 px-4 rounded-lg  hover:bg-[#f3f3f3] border-[1px] border-transparent hover:border-gray-200 cursor-pointer flex justify-center gap-4 items-center ${
                activeTab === 'results' ? 'bg-[#f3f3f3] border-gray-200' : ''
              }`}
              data-id="results"
              onClick={handleTabChange}
              type="button"
            >
              <MdOutlineAnalytics size={24} className="pointer-events-none" />
              <p className="hidden lg:block grow text-left text-sm pointer-events-none">
                Results
              </p>
            </button>
          </div>
          {/* Content container */}
          <div className="w-full mt-4 ml-4 bg-gray-50 rounded-tl-lg rounded-br-xl p-8 shadow-sm border-[1px]">
            <div className="flex flex-col justify-center gap-2 mb-8">
              <h1 className="font-semibold leading-4">Add risk</h1>
              <p className="text-sm leading-3 text-gray-500">Enter details</p>
            </div>

            <form action="" className="w-full flex flex-col gap-6">
              <div className="flex gap-8">
                <fieldset className="flex-1 gap-4">
                  <div className="text-sm font-light mb-2">Risk Category</div>
                  <div className="bg-[#f3f3f3] rounded-lg border-[1px] p-2">
                    <select
                      name="riskCategory"
                      id="riskCategory"
                      className={`w-full bg-transparent outline-none cursor-pointer ${
                        !riskCategory && 'text-gray-500'
                      }`}
                      value={riskCategory}
                      onChange={({ target }) => setRiskCategory(target.value)}
                    >
                      <option value="" className="  text-gray-500 italic">
                        Risk Category
                      </option>

                      <option value="Hello" className="text-[#232323]">
                        Hej
                      </option>

                      <option value="På" className="text-[#232323]">
                        På
                      </option>

                      <option value="Dig" className="text-[#232323]">
                        Dig
                      </option>

                      <option value="Du" className="text-[#232323]">
                        Du
                      </option>
                    </select>
                  </div>
                </fieldset>

                <fieldset className="flex-1 gap-4">
                  <div className="text-sm font-light mb-2">Risk Category</div>
                  <div className="bg-[#f3f3f3] rounded-lg border-[1px] p-2">
                    <select
                      name="riskCategory"
                      id="riskCategory"
                      className={`w-full bg-transparent outline-none cursor-pointer ${
                        !riskCategory && 'text-gray-500'
                      }`}
                      value={riskCategory}
                      onChange={({ target }) => setRiskCategory(target.value)}
                    >
                      <option value="" className="  text-gray-500 italic">
                        Risk Category
                      </option>

                      <option value="Hello" className="text-[#232323]">
                        Hej
                      </option>

                      <option value="På" className="text-[#232323]">
                        På
                      </option>

                      <option value="Dig" className="text-[#232323]">
                        Dig
                      </option>

                      <option value="Du" className="text-[#232323]">
                        Du
                      </option>
                    </select>
                  </div>
                </fieldset>
              </div>

              <div className="flex gap-8">
                <fieldset className="flex-1 gap-4">
                  <div className="text-sm font-light mb-2">Risk Category</div>
                  <div className="bg-[#f3f3f3] rounded-lg border-[1px] p-2">
                    <select
                      name="riskCategory"
                      id="riskCategory"
                      className={`w-full bg-transparent outline-none cursor-pointer ${
                        !riskCategory && 'text-gray-500'
                      }`}
                      value={riskCategory}
                      onChange={({ target }) => setRiskCategory(target.value)}
                    >
                      <option value="" className="  text-gray-500 italic">
                        Risk Category
                      </option>

                      <option value="Hello" className="text-[#232323]">
                        Hej
                      </option>

                      <option value="På" className="text-[#232323]">
                        På
                      </option>

                      <option value="Dig" className="text-[#232323]">
                        Dig
                      </option>

                      <option value="Du" className="text-[#232323]">
                        Du
                      </option>
                    </select>
                  </div>
                </fieldset>

                <fieldset className="flex-1 gap-4">
                  <div className="text-sm font-light mb-2">Risk Category</div>
                  <div className="bg-[#f3f3f3] rounded-lg border-[1px] p-2">
                    <select
                      name="riskCategory"
                      id="riskCategory"
                      className={`w-full bg-transparent outline-none cursor-pointer ${
                        !riskCategory && 'text-gray-500'
                      }`}
                      value={riskCategory}
                      onChange={({ target }) => setRiskCategory(target.value)}
                    >
                      <option value="" className="  text-gray-500 italic">
                        Risk Category
                      </option>

                      <option value="Hello" className="text-[#232323]">
                        Hej
                      </option>

                      <option value="På" className="text-[#232323]">
                        På
                      </option>

                      <option value="Dig" className="text-[#232323]">
                        Dig
                      </option>

                      <option value="Du" className="text-[#232323]">
                        Du
                      </option>
                    </select>
                  </div>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
