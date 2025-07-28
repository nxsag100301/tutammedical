import Reveal from '@/components/Reveal'
import React from 'react'

const Introduce = () => {
  return (
    <Reveal initialY={100} delay={0.2}>
      <div className='flex flex-col md:flex-row gap-4 md:gap-0 px-6 lg:px-20 mt-6 md:mt-10'>
        <div className='w-[100%] md:w-[55%]'>
          <iframe
            className='w-[100%] h-[300px] sm:h-[360px] md:h-[460px]'
            src='https://www.youtube.com/embed/bach4E5taEg'
            title='TYP Pharmacy-Công ty cổ phần dược Thiên Y Phúc "Hành trình bảo vệ sức khỏe"'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerpolicy='strict-origin-when-cross-origin'
            allowfullscreen
          ></iframe>
        </div>
        <div className='w-[100%] md:w-[45%] px-0 md:px-10 space-y-4 text-justify text-sm xl:text-base'>
          <p>
            Từ Tâm Medical là thương hiệu được thành lập từ năm 2016, xuất phát
            từ niềm đam mê và sứ mệnh phục vụ sức khỏe cho cộng đồng. Ban Lãnh
            Đạo cùng đội ngũ chuyên gia hàng đầu trong lĩnh vực y tế đã cùng
            nhau xây dựng chuỗi hệ thống nhà thuốc mang tên Từ Tâm Medical vào
            năm 2021.
          </p>
          <p>
            Với tinh thần không ngừng sáng tạo và nỗ lực, Từ Tâm Medical không
            chỉ là một điểm đến để mua sắm các sản phẩm chăm sóc sức khỏe, mà
            còn là nơi mang đến niềm tin và an tâm cho khách hàng. Hệ thống nhà
            thuốc chúng tôi không chỉ phục vụ trực tiếp tại cửa hàng mà còn có
            kênh bán hàng online, đảm bảo sự tiện lợi và thuận tiện cho mọi
            người…
          </p>
        </div>
      </div>
    </Reveal>
  )
}

export default Introduce
