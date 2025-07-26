import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem
} from '@/components/ui/menubar'
import { useNavigate } from 'react-router-dom'

const MenuDesktop = () => {
  const navigate = useNavigate()

  return (
    <Menubar className='hidden lg:flex gap-2 text-primary-600 font-semibold text-sm 2xl:text-base border-none shadow-none bg-transparent'>
      <MenubarMenu>
        <MenubarTrigger
          className='cursor-pointer bg-transparent'
          onClick={() => navigate('/introduce')}
        >
          Giới thiệu
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className='cursor-pointer bg-transparent'>
          Phòng khám Đa Khoa
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem
          // onClick={() =>
          //   (window.location.href = 'https://viendongyvietnam.com/')
          // }
          >
            Hệ thống phòng khám Đa Khoa Quốc Khanh
          </MenubarItem>
          <MenubarItem>Hệ thống phòng khám Đa Khoa Từ Tâm</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className='cursor-pointer bg-transparent'>
          Y học Gia đình
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className='cursor-pointer bg-transparent'>
          Nhà thuốc gần đây
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger
          className='cursor-pointer bg-transparent'
          onClick={() =>
            (window.location.href = 'https://viendongyvietnam.com/')
          }
        >
          Viện Đông Nam Dược
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className='cursor-pointer bg-transparent'>
          Cộng đồng Từ Tâm
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className='cursor-pointer bg-transparent'>
          Dược phẩm Từ Tâm
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem
            onClick={() => (window.location.href = 'https://thienyphuc.vn')}
          >
            Công ty cổ phần Dược phẩm Thiên Y Phúc
          </MenubarItem>
          <MenubarItem
            onClick={() => (window.location.href = 'https://agk.com.vn')}
          >
            Công ty cổ phần đầu tư Anh Gia Khánh
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className='cursor-pointer bg-transparent'>
          Đặt lịch
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  )
}

export default MenuDesktop
