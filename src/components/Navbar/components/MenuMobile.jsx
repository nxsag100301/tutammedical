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
      <div key={item.columnTitle} className='space-y-2'>
        <span
          className='block font-semibold text-primary-700 text-base cursor-pointer hover:text-primary-500'
          onClick={() => {
            if (item.url) handleNavigate(item.url)
            else if (item.openUrl) handleExternal(item.openUrl)
          }}
        >
          {item.columnTitle}
        </span>

        {hasChildren && (
          <ul className='pl-4 space-y-1 text-sm text-primary-600'>
            {item.children.map((child, idx) => (
              <li key={idx} className='cursor-pointer hover:text-primary-500'>
                • {child.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  const renderIntroduceColumn = (columns) => {
    return columns.map((item, idx) => {
      if (item.columnTitle) {
        return renderColumnItem(item)
      }

      if (item.columnGroups) {
        return (
          <div key={idx} className='space-y-3'>
            {item.columnGroups.map((group, groupIdx) => (
              <div key={groupIdx} className='pl-2'>
                <div className='font-semibold text-primary-700 text-base'>
                  {group.groupTitle}
                </div>
                <ul className='pl-4 space-y-1 text-sm text-primary-600'>
                  {group.children?.map((child, cIdx) => (
                    <li
                      key={cIdx}
                      className='cursor-pointer hover:text-primary-500'
                    >
                      • {child.title}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )
      }

      return null
    })
  }

  const introduceColumn = [
    {
      columnTitle: 'Giới thiệu',
      url: '/introduce',
      children: [
        { title: 'Chúng tôi là ai?' },
        { title: 'Tầm nhìn' },
        { title: 'Sứ mệnh' },
        { title: 'Giá trị cốt lõi' },
        { title: 'Tại sao lại chọn Từ Tâm Medical?' }
      ]
    },
    {
      columnGroups: [
        {
          groupTitle: 'Khởi nguồn cảm hứng',
          children: [
            { title: 'Từ Tâm mà Khởi ý - Nguồn gốc của Tầm nhìn' },
            { title: 'Từ Tâm mà Thực hiện - Con đường tới Mục tiêu' },
            {
              title:
                'Từ Tâm mới Thành tựu - Ý nghĩa của Sự thành công đích thực'
            }
          ]
        },
        {
          groupTitle: 'Giáo dục truyền thống',
          children: [
            { title: 'Y tế Từ Tâm - Nâng tầm Sức khoẻ' },
            { title: 'Điều trị Từ Tâm - Nâng tầm Y Đức' },
            { title: 'Chăm sóc Từ Tâm - Nâng tầm Giá trị' },
            { title: 'Cộng đồng Từ Tâm - Nâng tầm Lan toả' }
          ]
        }
      ]
    },
    {
      columnTitle: 'Cơ cấu tổ chức',
      children: []
    }
  ]

  const multidisciplinarySystemColumn = [
    {
      columnTitle: 'Phòng khám Đa Khoa Quốc Khanh',
      url: '',
      children: [
        { title: 'Dịch vụ khám bệnh' },
        { title: 'Đội ngũ  y bác sĩ' },
        { title: 'Công nghệ - trang thiết bị' }
      ]
    },
    {
      columnTitle: 'Phòng khám Đa Khoa Từ Tâm',
      url: '',
      children: [
        { title: 'Dịch vụ khám bệnh' },
        { title: 'Đội ngũ  y bác sĩ' },
        { title: 'Công nghệ - trang thiết bị' }
      ]
    }
  ]

  const tutamComunityColumn = [
    {
      columnTitle: 'Hoạt động Từ Tâm',
      children: [
        { title: 'Hoạt động cộng đồng 1' },
        { title: 'Hoạt động cộng đồng 2' }
      ]
    },
    { columnTitle: 'Góc ảnh Từ Tâm' },
    { columnTitle: 'Cuộc sống Y khoa' },
    { columnTitle: 'Trải nghiệm Khách hàng' },
    { columnTitle: 'Cơ sở Từ Tâm' },
    { columnTitle: 'Tuyển dụng' },
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
          <div className='flex flex-col gap-4 p-4 pt-14 text-primary-600 font-semibold overflow-y-auto h-full hide-scrollbar'>
            {renderIntroduceColumn(introduceColumn)}

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
