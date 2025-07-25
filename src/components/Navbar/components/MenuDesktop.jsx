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
    <Menubar className='hidden md:flex gap-2 text-primary-600 font-semibold text-sm 2xl:text-base border-none shadow-none bg-transparent'>
      <MenubarMenu>
        <MenubarTrigger className='cursor-pointer bg-transparent'>
          Giới thiệu
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className='cursor-pointer bg-transparent'>
          Phòng khám Đa Khoa
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={() => navigate('/phong-kham-quoc-khanh')}>
            Hệ thống phòng khám Đa Khoa Quốc Khanh
          </MenubarItem>
          <MenubarItem onClick={() => navigate('/phong-kham-tu-tam')}>
            Hệ thống phòng khám Đa Khoa Từ Tâm
          </MenubarItem>
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
        <MenubarTrigger className='cursor-pointer bg-transparent'>
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
          Đặt lịch
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  )
}

export default MenuDesktop
