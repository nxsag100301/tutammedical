import React from 'react'
import { SiZalo } from 'react-icons/si'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-screen-2xl mx-auto px-6 lg:px-20 mt-10 pb-10 text-sm'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Logo + giới thiệu */}
        <div className='px-4 sm:px-6 space-y-4 text-center sm:text-left'>
          <img
            src='/images/tutamlogo2.jpg'
            className='w-[100px] h-[100px] mx-auto'
            alt='Từ Tâm logo'
          />
          <p className='text-justify'>
            Với phương châm "Đồng hành bảo vệ sức khỏe Việt", Từ Tâm Medical tập
            trung vào giá trị sản phẩm, an toàn chất lượng nhằm đảm bảo sự an
            tâm tuyệt đối cho cộng đồng người tiêu dùng.
          </p>
        </div>

        {/* Thông tin liên hệ */}
        <div className='space-y-3 px-4 sm:px-6'>
          <p className='text-xl font-semibold'>Thông tin liên hệ</p>
          <p className='font-semibold'>Từ Tâm Medical</p>
          <div>
            <span className='font-semibold'>Email:</span> nxsag100301@gmail.com
          </div>
          <div>
            <span className='font-semibold'>Điện thoại:</span> 0773482059
          </div>
          <div>
            <span className='font-semibold'>Địa chỉ:</span> 78/14 Nguyễn Thị Tú
            - P. Bình Hưng Hòa B - Q. Bình Tân - Tp. HCM
          </div>
        </div>

        {/* Mạng xã hội */}
        <div className='space-y-3 px-4 sm:px-6'>
          <p className='text-xl font-semibold'>Kết nối với Từ Tâm Medical</p>
          <div className='flex gap-4'>
            <SiZalo className='h-9 w-9 border p-2 rounded-sm cursor-pointer' />
            <FaFacebook className='h-9 w-9 cursor-pointer' />
            <FaGoogle className='h-9 w-9 cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
