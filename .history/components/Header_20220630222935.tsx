import React from 'react'
import {SearchIcon } from "@heroicons/react/solid"
const Header = () => {
  return (
    <header>
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
      <div>
        <SearchIcon></SearchIcon>
      </div>
    </header>
  )
}

export default Header