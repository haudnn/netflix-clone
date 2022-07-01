import React,{useState, useEffect} from 'react'
import {BellIcon, SearchIcon } from "@heroicons/react/solid"
import Link from 'next/link'
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() =>{
    const handelScroll = () => {
      if(window.screenY > 0 ) { 
        setIsScrolled(true)
      } else { 
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handelScroll)
    return () => {
      window.removeEventListener("scroll", handelScroll)
    }
  },[])
  return (
    <header className={isScrolled ? "bg-[#141414]" : ""}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img src="https://rb.gy/ulxxee" alt="logo" width={100} height={100} className="cursor-pointer object-contain" />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Trang chủ</li>
          <li className="headerLink">Phim T.hình</li>
          <li className="headerLink">Phim</li>
          <li className="headerLink">Mới & Phổ biến</li>
          <li className="headerLink">Danh sách của tôi</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm">
        <SearchIcon className="h-6 w-6 sm:inline "></SearchIcon>
        {/* <p className="hidden lg:inline">Trẻ em</p> */}
        <BellIcon className="h-6 w-6"></BellIcon>
       <Link href="/account">
        <img src="https://rb.gy/g1pwyx" alt="avatar" className="cursor-pointer rounded"/>
       </Link>
      </div>
    </header>
  )
}

export default Header