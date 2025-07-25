import React, { useState } from 'react'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { IoMdMenu } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const MenuMobile = () => {
  const [showSub, setShowSub] = useState(false)
  const navigate = useNavigate()

  return (
    <div className='md:hidden'>
      <Sheet>
        <SheetTrigger>
          <IoMdMenu className='text-3xl text-primary-600' />
        </SheetTrigger>
        <SheetContent side='right'>
          <div className='flex flex-col gap-4 p-4 pt-14 text-primary-600 font-semibold'>
            <span className='cursor-pointer' onClick={() => navigate('/')}>
              Giới thiệu
            </span>

            <div>
              <span
                className='cursor-pointer'
                onClick={() => setShowSub(!showSub)}
              >
                Phòng khám Đa Khoa
              </span>
              {showSub && (
                <div className='pl-4 pt-2 flex flex-col gap-2 text-sm font-normal'>
                  <span
                    className='cursor-pointer'
                    onClick={() => navigate('/phong-kham-quoc-khanh')}
                  >
                    • Đa Khoa Quốc Khanh
                  </span>
                  <span
                    className='cursor-pointer'
                    onClick={() => navigate('/phong-kham-tu-tam')}
                  >
                    • Đa Khoa Từ Tâm
                  </span>
                </div>
              )}
            </div>

            <span
              onClick={() => navigate('/y-hoc-gia-dinh')}
              className='cursor-pointer'
            >
              Y học gia đình
            </span>
            <span
              onClick={() => navigate('/nha-thuoc')}
              className='cursor-pointer'
            >
              Nhà thuốc gần đây
            </span>
            <span
              onClick={() => navigate('/vien-dong-nam-duoc')}
              className='cursor-pointer'
            >
              Viện Đông Nam Dược
            </span>
            <span
              onClick={() => navigate('/cong-dong')}
              className='cursor-pointer'
            >
              Cộng đồng Từ Tâm
            </span>
            <span
              onClick={() => navigate('/dat-lich')}
              className='cursor-pointer'
            >
              Đặt lịch
            </span>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MenuMobile
