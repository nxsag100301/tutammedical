import React, { useState } from 'react'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { IoMdMenu } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const MenuMobile = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigate = (path) => {
    navigate(path)
    setIsOpen(false)
  }

  const handleExternal = (url) => {
    window.location.href = url
    setIsOpen(false)
  }

  const renderColumnItem = (item) => {
    const hasChildren = Array.isArray(item.children) && item.children.length > 0

    return (
      <div key={item.columnTitle}>
        <span
          className='cursor-pointer font-medium'
          onClick={() => {
            if (item.url) handleNavigate(item.url)
            else if (item.openUrl) handleExternal(item.openUrl)
          }}
        >
          {item.columnTitle}
        </span>

        {hasChildren && (
          <div className='pl-4 pt-2 flex flex-col gap-2 text-base font-normal'>
            {item.children.map((child, idx) => (
              <span key={idx} className='cursor-pointer text-sm'>
                • {child.title}
              </span>
            ))}
          </div>
        )}
      </div>
    )
  }

  // Dữ liệu giữ nguyên như bạn yêu cầu:
  const introduceColumn = [
    {
      columnTitle: 'Giới thiệu',
      url: '/introduce',
      children: [{ title: 'Chúng tôi là ai' }, { title: 'Giá trị cốt lõi' }]
    },
    {
      columnTitle: 'Khởi nguồn cảm hứng',
      children: [
        { title: 'Khởi nguồn cảm hứng 1' },
        { title: 'Khởi nguồn cảm hứng 2' }
      ]
    },
    {
      columnTitle: 'Giáo dục tryền thống',
      children: [
        { title: 'Giáo dục tryền thống 1' },
        { title: 'Giáo dục tryền thống 2' }
      ]
    }
  ]

  const multidisciplinarySystemColumn = [
    {
      columnTitle: 'Hệ thống đa khoa',
      url: '',
      children: [
        { title: 'Phòng khám Đa Khoa Quốc Khanh' },
        { title: 'Phòng khám Đa Khoa Từ Tâm' }
      ]
    },
    {
      columnTitle: 'Dịch vụ',
      url: '',
      children: [{ title: 'Dịch vụ 1' }, { title: 'Dịch vụ 2' }]
    },
    {
      columnTitle: 'Đội ngũ y bác sĩ',
      children: [
        { title: 'Đội ngũ y bác sĩ 1' },
        { title: 'Đội ngũ y bác sĩ 2' }
      ]
    },
    {
      columnTitle: 'Công nghệ - trang thiết bị',
      children: [
        { title: 'Công nghệ - trang thiết bị 1' },
        { title: 'Công nghệ - trang thiết bị 2' }
      ]
    }
  ]

  const tutamComunityColumn = [
    {
      columnTitle: 'Hoạt động cộng đồng',
      children: [
        { title: 'Hoạt động cộng đồng 1' },
        { title: 'Hoạt động cộng đồng 2' }
      ]
    },
    {
      columnTitle: 'Góc ảnh Từ Tâm'
    },
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

  return (
    <div className='lg:hidden'>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <IoMdMenu className='text-3xl text-primary-600' />
        </SheetTrigger>
        <SheetContent side='right'>
          <div
            className='flex flex-col gap-4 p-4 pt-14 text-primary-600 
          font-semibold text-sm overflow-y-auto h-full hide-scrollbar'
          >
            <span
              className='cursor-pointer'
              onClick={() => handleNavigate('/')}
            >
              Trang chủ
            </span>

            {introduceColumn.map(renderColumnItem)}
            {multidisciplinarySystemColumn.map(renderColumnItem)}

            <span className='cursor-pointer'>Hệ thống gần đây</span>

            <span
              className='cursor-pointer'
              onClick={() => handleExternal('https://viendongyvietnam.com/')}
            >
              Viện Đông Nam Dược Việt Nam
            </span>

            {tutamPharmaceutical.map(renderColumnItem)}
            {tutamComunityColumn.map(renderColumnItem)}

            <span className='cursor-pointer'>Đặt lịch</span>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MenuMobile
