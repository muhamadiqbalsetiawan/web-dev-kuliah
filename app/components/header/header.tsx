import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (  
    <>
    <header className="fixed w-full bg-[#85997D]">
        <div className="py-1 px-1 md:py-2 md:pl-20   mx-auto flex flex-row justify-between items-center ">
          <div className="w-[50%]">
            <Link  href="https://lp2m.uinsgd.ac.id/" target="_blank">
              <div className="flex space-x-1 md:py-2 md:space-x-2 items-center ">
                <img
                src="https://fst.uinsgd.ac.id/wp-content/uploads/2020/05/cropped-logo-uin.png"
                className="w-10 h-10 md:w-16 md:h-16 rounded-full"
                />
                <div className="block">
                <p className="font-serif text-sm md:font-serif ">Lembaga Penelitian dan Pengabdian</p>
                <p className="font-serif text-sm md:font-serif "> kepada Masyarakat</p>
                </div>
              </div>
            </Link>          
          </div>

          <div className="font-serif text-xs space-x-2 px-1  md:px-16 md:text-base md:space-x-4">
            <Link href="/"className="font-semibold" >Beranda</Link>
            <Link href="/" className="text-[#498428] hover:text-[#1E1E1E] font-semibold">Peta Sebaran</Link>
            <Link href="/" className="text-[#1E1E1E] bg-[#A6D577] hover:bg-lime-600 font-semibold md:h- md:px-6 md:w-20 rounded-md md:py-1">Login</Link>
          </div>
        </div>
      </header>

    </>
  )
}

export default Header