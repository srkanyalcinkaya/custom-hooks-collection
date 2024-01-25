import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import useTheme from './hooks/use-theme'
import useConnection from './hooks/use-connection';
import useCopyToClipboard from './hooks/use-copy-to-clipboard';

function App() {
  const { setTheme, theme, optionsTheme } = useTheme();
  const { status, OfflineBanner, StatusComponent } = useConnection()
  const { copied, error, copyToClipboard } = useCopyToClipboard()


  return (
    <main className='h-screen  w-screen flex flex-col gap-6 items-center justify-center  bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-2xl text-center'>

      <OfflineBanner>
        You are offline. Plaese connect your device.
      </OfflineBanner>

      <div className="card">

        <h1 className='text-3xl font-bold'>
          # Custom React Hooks Collection

        </h1>
      </div>
      
        <ul className='flex flex-col items-center gap-6 max-w-md w-full  text-2xl font-medium  '>
          <li className='text-start flex flex-col items-center justify-center border-[1px] border-gray-800 dark:border-gray-200 p-2 rounded-xl gap-2 w-full'>
            <span>## useCopyToClipboard</span>
            <button disabled={copied} onClick={() => copyToClipboard("Hello World")} className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              {copied ? "Kopyalandı" : "Kopyala"}
            </button>

          </li>
          <li className='text-start flex flex-col items-center justify-center border-[1px] border-gray-800 dark:border-gray-200 p-2 rounded-xl gap-2 w-full'>
            <span>## useTheme</span>
            <div className='flex items-center gap-6 '>


              {
                optionsTheme.map(item => (
                  <button
                    key={item.value}
                    onClick={() => setTheme(item.value)}
                    className={`${theme === item.value ? 'bg-slate-800 dark:bg-white dark:text-slate-800 text-white rounded-full ' : 'bg-white text-slate-800 dark:bg-slate-800 dark:text-white'}  p-3`}
                  >
                    {item.icon}
                  </button>
                ))
              }

            </div>

          </li>
          <li className='text-start flex flex-col items-center justify-center border-[1px] border-gray-800 dark:border-gray-200 p-2 rounded-xl gap-2 w-full'>
            <span>## useConnection</span>
            <StatusComponent />

          </li>
        </ul>
     


    </main>
  )
}

export default App
