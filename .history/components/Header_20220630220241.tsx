import React from 'react'

const Header = () => {
  return (
    <header>
      <div>
        <img src="https://rb.gy/ulxxee" alt="logo" width={100} height={100} className="cursor-pointer object-contain" />
      </div>
      <ul>
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