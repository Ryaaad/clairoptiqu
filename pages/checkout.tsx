import React from 'react'
import { useSelector } from 'react-redux'
import CheckOut from '../Components/checkOut'
import Footer from '../Components/footer'
import Navbar from '../Components/Navbar'
import Pannier from '../Components/Pannier/pannier'

export default function checkout() {
  const PannierC=useSelector((state:any)=>state.main.PannierClicked)
  const direction=useSelector((state:any)=>state.main.dir)
  return (
    <div  dir={`${direction ? 'ltr' : 'rtl'}`} >
       { PannierC &&    <div className="fixed top-0 left-0 bottom-0 right-0 w-full grid place-content-center z-10 h-[100vh] bg-[#00000045]  "
              // onClick={()=>dispatch(ClickerPannier())}
 >
            <Pannier></Pannier>
              </div>
                  }
              <Navbar></Navbar>
    <CheckOut/>
    <Footer />
    </div>
  )
}
