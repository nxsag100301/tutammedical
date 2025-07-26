import React, { useState } from 'react'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { IoMdMenu } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const MenuMobile = () => {
  const [showSub, setShowSub] = useState(false)
  const [showSubDuoc, setShowSubDuoc] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleNavigate = (path) => {
    navigate(path)
    setIsOpen(false)
  }

  return (
    <div className='lg:hidden'>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <IoMdMenu className='text-3xl text-primary-600' />
        </SheetTrigger>
        <SheetContent side='right'>
          <div className='flex flex-col gap-4 p-4 pt-14 text-primary-600 font-semibold'>
            <span
              className='cursor-pointer'
              onClick={() => handleNavigate('/')}
            >
              Trang chủ
            </span>
            <span
              className='cursor-pointer'
              onClick={() => handleNavigate('/introduce')}
            >
              Giới thiệu
            </span>

            {/* Phòng khám Đa Khoa */}
            <div>
              <span
                className='cursor-pointer'
                onClick={() => setShowSub(!showSub)}
              >
                Phòng khám Đa Khoa
              </span>
              {showSub && (
                <div className='pl-4 pt-2 flex flex-col gap-2 text-base font-normal'>
                  <span
                    className='cursor-pointer'
                    onClick={() => handleNavigate('/phong-kham-quoc-khanh')}
                  >
                    • Đa Khoa Quốc Khanh
                  </span>
                  <span
                    className='cursor-pointer'
                    onClick={() => handleNavigate('/phong-kham-tu-tam')}
                  >
                    • Đa Khoa Từ Tâm
                  </span>
                </div>
              )}
            </div>

            <span className='cursor-pointer'>Y học gia đình</span>
            <span className='cursor-pointer'>Nhà thuốc gần đây</span>
            <span className='cursor-pointer'>Viện Đông Nam Dược</span>

            <span
              className='cursor-pointer'
              onClick={() =>
                (window.location.href = 'https://viendongyvietnam.com/')
              }
            >
              Cộng đồng Từ Tâm
            </span>

            {/* Dược phẩm Từ Tâm */}
            <div>
              <span
                className='cursor-pointer'
                onClick={() => setShowSubDuoc(!showSubDuoc)}
              >
                Dược phẩm Từ Tâm
              </span>
              {showSubDuoc && (
                <div className='pl-4 pt-2 flex flex-col gap-2 text-base font-normal'>
                  <span
                    className='cursor-pointer'
                    onClick={() =>
                      (window.location.href = 'https://thienyphuc.vn')
                    }
                  >
                    • Công ty CP Dược phẩm Thiên Y Phúc
                  </span>
                  <span
                    className='cursor-pointer'
                    onClick={() =>
                      (window.location.href = 'https://agk.com.vn')
                    }
                  >
                    • Công ty CP Đầu tư Anh Gia Khánh
                  </span>
                </div>
              )}
            </div>

            <span className='cursor-pointer'>Đặt lịch</span>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MenuMobile
