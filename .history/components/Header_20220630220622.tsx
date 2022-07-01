import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img src="https://rb.gy/ulxxee" alt="logo" width={100} height={100} className="cursor-pointer object-contain" />
      </div>
      <ul className="hidden space-x-4 md:flex">
        <li>Trang chủ</li>
        <li>Phim T.hình</li>
        <li>Phim</li>
        <li>Mới & Phổ biến</li>
        <li>Danh sách của tôi</li>
      </ul>
    </header>
  )
}

export default Header