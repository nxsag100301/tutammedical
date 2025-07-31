import React from 'react'
import { SiZalo } from 'react-icons/si'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import ListPage from './components/ListPage'

const Footer = () => {
  const introduceColumn = [
    {
      columnTitle: 'Giới thiệu',
      url: '/introduce',
      children: [
        { title: 'Chúng tôi là ai?', url: '/whoweare' },
        { title: 'Tầm nhìn', url: '/vision' },
        { title: 'Sứ mệnh', url: '/mission' },
        { title: 'Giá trị cốt lõi', url: '/corevalues' },
        { title: 'Tại sao lại chọn Từ Tâm Medical?', url: '/whychoosewe' }
      ]
    },
    {
      columnGroups: [
        {
          groupTitle: 'Khởi nguồn cảm hứng',
          url: '/inspirationrigin',
          children: [
            {
              title: 'Từ Tâm mà Khởi ý - Nguồn gốc của Tầm nhìn',
              url: '/tutamkhoiy'
            },
            {
              title: 'Từ Tâm mà Thực hiện - Con đường tới Mục tiêu',
              url: '/tutamthuchien'
            },
            {
              title:
                'Từ Tâm mới Thành tựu - Ý nghĩa của Sự thành công đích thực',
              url: '/tutamthanhtuu'
            }
          ]
        },
        {
          groupTitle: 'Giáo dục truyền thống',
          url: '/educationtraditional',
          children: [
            { title: 'Y tế Từ Tâm - Nâng tầm Sức khoẻ', url: '/ytetutam' },
            { title: 'Điều trị Từ Tâm - Nâng tầm Y Đức', url: '/dieutritutam' },
            {
              title: 'Chăm sóc Từ Tâm - Nâng tầm Giá trị',
              url: '/chamsoctutam'
            },
            {
              title: 'Cộng đồng Từ Tâm - Nâng tầm Lan toả',
              url: '/congdongtutam'
            }
          ]
        }
      ]
    }
    // {
    //   columnTitle: 'Cơ cấu tổ chức',
    //   children: []
    // }
  ]

  const multidisciplinarySystemColumn = [
    {
      columnTitle: 'Phòng khám Đa Khoa Quốc Khanh',
      url: '',
      children: [
        {
          title: 'Dịch vụ khám bệnh'
        },
        { title: 'Đội ngũ  y bác sĩ' },
        { title: 'Công nghệ - trang thiết bị' }
      ]
    },
    {
      columnTitle: 'Phòng khám Đa Khoa Từ Tâm',
      url: '',
      children: [
        {
          title: 'Dịch vụ khám bệnh'
        },
        { title: 'Đội ngũ  y bác sĩ' },
        { title: 'Công nghệ - trang thiết bị' }
      ]
    }
  ]

  const tutamComunityColumn = [
    // {
    //   columnTitle: 'Hoạt động Từ Tâm'
    //   // children: [
    //   //   {
    //   //     title: 'Hoạt động Từ Tâm 1'
    //   //   },
    //   //   { title: 'Hoạt động Từ Tâm 2' }
    //   // ]
    // },
    // {
    //   columnTitle: 'Góc ảnh Từ Tâm'
    // },
    // {
    //   columnTitle: 'Cuộc sống Y khoa'
    // },
    // {
    //   columnTitle: 'Trải nghiệm Khách hàng'
    // },
    // {
    //   columnTitle: 'Cơ sở Từ Tâm'
    // },
    // {
    //   columnTitle: 'Tuyển dụng'
    // },
    {
      columnTitle: 'Đổi mới công nghệ',
      openUrl: 'https://sixossoft.com'
    }
  ]

  const tutamPharmaceutical = [
    {
      columnTitle: 'Công ty cổ phần Dược phẩm Thiên Y Phúc',
      openUrl: 'https://thienyphuc.vn'
    },
    {
      columnTitle: 'Công ty cổ phần đầu tư Anh Gia Khánh',
      openUrl: 'https://agk.com.vn'
    }
  ]

  const combinedColumnData = [
    ...introduceColumn,
    ...multidisciplinarySystemColumn,
    ...tutamComunityColumn,
    ...tutamPharmaceutical
  ]

  return (
    <div className='w-full border border-primary-100 mt-8 '>
      <ListPage columnData={combinedColumnData} />
      <div className='w-full border border-primary-100 mt-8'>
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
                Với phương châm "Đồng hành bảo vệ sức khỏe Việt", Từ Tâm Medical
                tập trung vào giá trị sản phẩm, an toàn chất lượng nhằm đảm bảo
                sự an tâm tuyệt đối cho cộng đồng người tiêu dùng.
              </p>
            </div>

            {/* Thông tin liên hệ */}
            <div className='space-y-3 px-4 sm:px-6'>
              <p className='text-xl font-semibold'>Thông tin liên hệ</p>
              <h3 className='font-semibold'>Từ Tâm Medical Global</h3>
              <div>
                <span className='font-semibold'>Email:</span>{' '}
                tutammedical@gmail.com
              </div>
              <div>
                <span className='font-semibold'>Hotline:</span> 1900 8679
              </div>
              <div>
                <span className='font-semibold'>Văn phòng đại diện:</span>{' '}
                120/2B Phan Văn Hớn, xã Bà Điểm, huyện Hóc Môn, Tp Hồ Chí Minh
              </div>
            </div>

            {/* Mạng xã hội */}
            <div className='space-y-3 px-4 sm:px-6'>
              <h3 className='text-xl font-semibold'>
                Kết nối với Từ Tâm Medical
              </h3>
              <div className='flex gap-4'>
                <SiZalo className='h-9 w-9 border p-2 rounded-sm cursor-pointer' />
                <FaFacebook className='h-9 w-9 cursor-pointer' />
                <FaGoogle className='h-9 w-9 cursor-pointer' />
              </div>
              <div>
                <span className='font-semibold'>Chi nhánh 1:</span> 1170 - 1174
                Kha Vạn Cân, Phường Linh Xuân, Thành phố Hồ Chí Minh
              </div>
              <div>
                <span className='font-semibold'>Chi nhánh 2:</span> 732 - 738 Lê
                Đức Thọ, Phường An Hội Đông, Thành phố Hồ Chí Minh
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
