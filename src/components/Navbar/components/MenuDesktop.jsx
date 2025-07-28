import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent
} from '@/components/ui/menubar'
import DropdownContent from './DropdownContent'

const MenuDesktop = () => {
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
    {
      columnTitle: 'Hoạt động Từ Tâm'
      // children: [
      //   {
      //     title: 'Hoạt động Từ Tâm 1'
      //   },
      //   { title: 'Hoạt động Từ Tâm 2' }
      // ]
    },
    {
      columnTitle: 'Góc ảnh Từ Tâm'
    },
    {
      columnTitle: 'Cuộc sống Y khoa'
    },
    {
      columnTitle: 'Trải nghiệm Khách hàng'
    },
    {
      columnTitle: 'Cơ sở Từ Tâm'
    },
    {
      columnTitle: 'Tuyển dụng'
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
          <DropdownContent
            columnData={multidisciplinarySystemColumn}
            flexDirection='column'
            image={'/images/clinic.jpg'}
          />
        </MenubarContent>
      </MenubarMenu>

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
          <DropdownContent
            columnData={tutamPharmaceutical}
            flexDirection='column'
            image={'/images/medic.jpg'}
          />
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className='cursor-pointer bg-transparent'>
          Cộng đồng Từ Tâm
        </MenubarTrigger>
        <MenubarContent>
          <DropdownContent
            columnData={tutamComunityColumn}
            flexDirection='column'
            image={'/images/community.jpg'}
          />
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
