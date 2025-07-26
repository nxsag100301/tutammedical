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
          <p className='font-semibold'>Từ Tâm Medical Global</p>
          <div>
            <span className='font-semibold'>Email:</span>{' '}
            pkquockhanh120@gmail.com
          </div>
          <div>
            <span className='font-semibold'>Hotline:</span> 1900 8679
          </div>
          <div>
            <span className='font-semibold'>Văn phòng đại diện:</span> 120/2B
            Phan Văn Hớn, xã Bà Điểm, huyện Hóc Môn, Tp Hồ Chí Minh
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
          <div>
            <span className='font-semibold'>Chi nhánh 1:</span> 1170 - 1174 Kha
            Vạn Cân, Phường Linh Xuân, Thành phố Hồ Chí Minh
          </div>
          <div>
            <span className='font-semibold'>Chi nhánh 2:</span> 732 - 738 Lê Đức
            Thọ, Phường An Hội Đông, Thành phố Hồ Chí Minh
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
