import { createElement, useEffect, useState } from "react";



export default function useConnection() {
    const [status, setStatus] = useState(true)
    const [openBanner, setOpenBanner] = useState(true)

    useEffect(() => {
        const events = ["online", "offline"]

        const eventHandle = () => { setStatus(navigator.onLine) }

        events.forEach(event => window.addEventListener(event, eventHandle))
        let timer1 = setTimeout(() => setOpenBanner(false), 10000);

        return () => {
            events.forEach(event => window.removeEventListener(event, eventHandle))
            clearTimeout(timer1);
            setOpenBanner(true)
        };
    }, [status]);




    const StatusComponent = () => {


        if (status) {
            return (
                <div className='text-white bg-green-500 p-2 rounded-full' >

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                    </svg>
                </div >
            )
        } else {
            return (
                <div className='relative text-white bg-red-500 p-2 rounded-full'>
                    <svg className='h-6 w-6' viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M1.37128 8.1434C7.22915 2.28553 16.7266 2.28553 22.5845 8.1434C22.8774 8.43628 22.8774 8.91114 22.5845 9.20404L22.0542 9.73441C21.9135 9.87507 21.7228 9.9541 21.5238 9.9541C21.3249 9.95411 21.1342 9.87509 20.9935 9.73443C16.0143 4.75525 7.94146 4.75525 2.96227 9.73443C2.82162 9.87509 2.63084 9.95411 2.43193 9.9541C2.23301 9.9541 2.04224 9.87507 1.90159 9.73441L1.37126 9.20404C1.07839 8.91114 1.0784 8.43628 1.37128 8.1434ZM4.55326 11.3254C8.65377 7.22493 15.302 7.22493 19.4025 11.3254C19.6954 11.6183 19.6954 12.0932 19.4025 12.3861L18.8722 12.9164C18.7316 13.0571 18.5408 13.1361 18.3419 13.1361C18.143 13.1361 17.9522 13.0571 17.8115 12.9164C14.5897 9.6946 9.3661 9.6946 6.14427 12.9164C5.85139 13.2093 5.37652 13.2093 5.08362 12.9164L4.55327 12.3861C4.41262 12.2455 4.33359 12.0547 4.33359 11.8558C4.33359 11.6569 4.41261 11.4661 4.55326 11.3254ZM7.75733 14.5074C10.1005 12.1642 13.8995 12.1642 16.2426 14.5074C16.5355 14.8003 16.5355 15.2751 16.2426 15.568L15.7123 16.0983C15.5716 16.239 15.3809 16.318 15.182 16.318C14.983 16.318 14.7923 16.239 14.6516 16.0983C13.1872 14.6339 10.8128 14.6339 9.34832 16.0983C9.05543 16.3912 8.58055 16.3912 8.28766 16.0983L7.75733 15.568C7.46444 15.2751 7.46444 14.8003 7.75733 14.5074ZM10.9393 17.6893C11.5251 17.1036 12.4748 17.1036 13.0606 17.6893C13.3535 17.9822 13.3535 18.4571 13.0606 18.75L12.5303 19.2803C12.3896 19.421 12.1989 19.5 12 19.5C11.8011 19.5 11.6103 19.421 11.4696 19.2803L10.9393 18.75C10.6464 18.4571 10.6464 17.9822 10.9393 17.6893Z" />
                        <line x1="3.77971" y1="20.8061" x2="22.806" y2="1.77978" stroke="currentColor" strokeWidth={2} />
                    </svg>
                </div>
            )
        }
    }




    const OfflineBanner = ({ children, as = "div", ...props }) => {
        if (!status) {
            if (openBanner) {
                return createElement("div", {
                    ...props,
                    className: "w-full h-16 bg-rose-500 text-white flex items-center justify-center text-xl top-0 fixed rounded-b-xl "
                }, children)
            }
            return null
        }

    }



    return {
        status,
        OfflineBanner,
        StatusComponent
    }
}