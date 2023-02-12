import React from 'react'
import CheckOut from '../Components/checkOut'
import Footer from '../Components/footer'
import Navbar from '../Components/Navbar'

export default function checkout() {
  return (
    <div>
       { PannierC &&    <div className="fixed top-0 left-0 bottom-0 right-0 w-full grid place-content-center z-10 h-[100vh] bg-[#00000045]  "
              // onClick={()=>dispatch(ClickerPannier())}
 >
            <Pannier></Pannier>
              </div>
                  }
              <Navbar Home={true}></Navbar>
    <CheckOut/>
    <Footer />
    </div>
  )
}
