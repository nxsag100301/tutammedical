import React from 'react'
import { IoMdMenu } from 'react-icons/io'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'

const Navbar = () => {
  return (
    <div className='max-w-screen-2xl mx-auto px-6 lg:px-20 h-[76px] flex items-center justify-between'>
      <div className='text-xl font-bold'>logo</div>

      {/* Menu desktop */}
      <div className='hidden md:flex flex-row md:gap-6 lg:gap-8'>
        <span className='cursor-pointer text-primary-400 text-sm xl:text-base'>
          Giới thiệu
        </span>
        <span className='cursor-pointer text-primary-400 text-sm xl:text-base'>
          Phòng khám đa khoa
        </span>
        <span className='cursor-pointer text-primary-400 text-sm xl:text-base'>
          ... gia đình
        </span>
        <span className='cursor-pointer text-primary-400 text-sm xl:text-base'>
          Nhà thuốc gần đây
        </span>
        <span className='cursor-pointer text-primary-400 text-sm xl:text-base'>
          Viện Đông Nam Dược
        </span>
      </div>

      {/* Icon menu mobile */}
      <div className='md:hidden'>
        <Sheet>
          <SheetTrigger>
            <IoMdMenu className='text-3xl text-primary-600' />
          </SheetTrigger>
          <SheetContent side='right'>
            <div className='flex flex-col gap-4 p-4 pt-14'>
              <span className='cursor-pointer text-primary-600'>
                Giới thiệu
              </span>
              <span className='cursor-pointer text-primary-600'>
                Phòng khám đa khoa
              </span>
              <span className='cursor-pointer text-primary-600'>
                ... gia đình
              </span>
              <span className='cursor-pointer text-primary-600'>
                Nhà thuốc gần đây
              </span>
              <span className='cursor-pointer text-primary-600'>
                Viện Đông Nam Dược
              </span>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export default Navbar
