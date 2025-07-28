import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem
} from '@/components/ui/menubar'
import DropdownContent from './DropdownContent'

const MenuDesktop = () => {
  const introduceColumn = [
    {
      columnTitle: 'Giới thiệu',
      url: '/introduce',
      children: [
        {
          title: 'Chúng tôi là ai'
        },
        { title: 'Giá trị cốt lõi' }
      ]
    },
    {
      columnTitle: 'Khởi nguồn cảm hứng',
      children: [
        {
          title: 'Khởi nguồn cảm hứng 1'
        },
        { title: 'Khởi nguồn cảm hứng 2' }
      ]
    },
    {
      columnTitle: 'Giáo dục tryền thống',
      children: [
        {
          title: 'Giáo dục tryền thống 1'
        },
        { title: 'Giáo dục tryền thống 2' }
      ]
    }
  ]

  const multidisciplinarySystemColumn = [
    {
      columnTitle: 'Hệ thống đa khoa',
      url: '',
      children: [
        {
          title: 'Phòng khám Đa Khoa Quốc Khanh'
        },
        { title: 'Phòng khám Đa Khoa Từ Tâm' }
      ]
    },
    {
      columnTitle: 'Dịch vụ',
      url: '',
      children: [
        {
          title: 'Dịch vụ 1'
        },
        { title: 'Dịch vụ 2' }
      ]
    },
    {
      columnTitle: 'Đội ngũ y bác sĩ',
      children: [
        {
          title: 'Đội ngũ y bác sĩ 1'
        },
        { title: 'Đội ngũ y bác sĩ 2' }
      ]
    },
    {
      columnTitle: 'Công nghệ - trang thiết bị',
      children: [
        {
          title: 'Công nghệ - trang thiết bị 1'
        },
        { title: 'Công nghệ - trang thiết bị 2' }
      ]
    }
  ]

  const tutamComunityColumn = [
    {
      columnTitle: 'Hoạt động cộng đồng',
      children: [
        {
          title: 'Hoạt động cộng đồng 1'
        },
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
    <Menubar className='hidden lg:flex gap-2 text-primary-600 font-semibold text-sm 2xl:text-base border-none shadow-none bg-transparent'>
      <MenubarMenu>
        <MenubarTrigger
          className='cursor-pointer bg-transparent'
          // onClick={() => navigate('/introduce')}
        >
          Giới thiệu
        </MenubarTrigger>
        <MenubarContent>
          <DropdownContent columnData={introduceColumn} />
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className='cursor-pointer bg-transparent'>
          Hệ thống Đa Khoa
        </MenubarTrigger>
        <MenubarContent>
          <DropdownContent columnData={multidisciplinarySystemColumn} />
        </MenubarContent>
      </MenubarMenu>

      {/* <MenubarMenu>
        <MenubarTrigger className='cursor-pointer bg-transparent'>
          Test dropdown
        </MenubarTrigger>
        <MenubarContent>
          <DropdownContent />
        </MenubarContent>
      </MenubarMenu> */}

      <MenubarMenu>
        <MenubarTrigger className='cursor-pointer bg-transparent'>
          Hệ thống gần đây
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger
          className='cursor-pointer bg-transparent'
          onClick={() =>
            (window.location.href = 'https://viendongyvietnam.com/')
          }
        >
          Viện Đông Nam Dược Việt Nam
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className='cursor-pointer bg-transparent'>
          Dược phẩm Từ Tâm
        </MenubarTrigger>
        <MenubarContent>
          <DropdownContent columnData={tutamPharmaceutical} />
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className='cursor-pointer bg-transparent'>
          Cộng đồng Từ Tâm
        </MenubarTrigger>
        <MenubarContent>
          <DropdownContent columnData={tutamComunityColumn} />
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
