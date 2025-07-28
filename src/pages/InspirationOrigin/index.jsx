import CustomBreadcrumb from '@/components/Breadcrumb'
import Reveal from '@/components/Reveal'

const InspirationOrigin = () => {
  const breadcrumbData = [
    { title: 'Trang chủ', url: '/' },
    { title: 'Khởi nguồn cảm hứng', url: null }
  ]

  return (
    <div>
      <CustomBreadcrumb data={breadcrumbData} />
      <Reveal initialY={50} delay={0.2}>
        <div className='px-6 lg:px-20 my-10 space-y-10'>
          <h2 className='font-bold text-2xl lg:text-3xl uppercase text-center text-primary-600'>
            Khởi nguồn cảm hứng
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-start'>
            <div className='space-y-6 text-justify'>
              <div id='tutamkhoiy' className='space-y-4'>
                <p className='font-semibold italic text-primary-700'>
                  "Từ Tâm mà Khởi ý, Từ Tâm mà Thực hiện, Từ Tâm mới Thành tựu"
                </p>
                <p>
                  ...gói trọn triết lý sâu sắc và là kim chỉ nam tuyệt vời cho
                  một dự án trong ngành y tế. Nó không chỉ là một khẩu hiệu, mà
                  là một cam kết về giá trị cốt lõi mà Tập đoàn Y khoa Quốc tế
                  Từ Tâm hướng tới. Đây là một triết lý mạnh mẽ, mang ý nghĩa
                  rất lớn đối với cả hành trình xây dựng doanh nghiệp và sức
                  khỏe cộng đồng mà Người sáng lập muốn tạo ra.
                </p>
                <p>
                  Câu nói{' '}
                  <span className='font-bold italic'>
                    "Từ Tâm mà Khởi ý, Từ Tâm mà Thực hiện, Từ Tâm mới Thành
                    tựu"
                  </span>{' '}
                  không chỉ là triết lý, mà còn là lời hứa, là cam kết của Tập
                  đoàn Y khoa Quốc tế Từ Tâm với chính mình, với đội ngũ và với
                  cộng đồng. Chính "Cái Tâm" này sẽ là ngọn hải đăng dẫn lối cho
                  Tập đoàn và Người sáng lập vượt qua mọi thử thách, xây dựng
                  một đế chế y tế không chỉ hùng mạnh về quy mô mà còn vĩ đại về
                  giá trị nhân văn.
                </p>
              </div>
            </div>

            <img
              src='/images/introduce2.jpg'
              alt='Từ Tâm mà khởi ý'
              className='rounded-md w-full object-cover max-h-[400px]'
            />
          </div>

          <div>
            <h3 className='font-semibold text-lg text-primary-700 mb-1'>
              "Từ Tâm mà Khởi ý" - Nguồn gốc của Tầm nhìn
            </h3>
            <p>
              <strong>Đạo đức và Y đức làm nền tảng:</strong> Ngành y tế khác
              với các ngành kinh doanh thông thường. Khởi ý từ "tâm" nghĩa là
              xuất phát điểm của mọi dự án, mọi dịch vụ đều phải đặt lợi ích,
              sức khỏe và sự an toàn của bệnh nhân lên hàng đầu. Đây là yếu tố
              then chốt để xây dựng niềm tin - tài sản quý giá nhất trong y tế.
            </p>
            <p>
              <strong>Giá trị cộng đồng:</strong> Ý tưởng về một hệ thống y tế
              "GẦN ĐÂY" tiện lợi, cá nhân hóa, và một Trung tâm Đa khoa hàng đầu
              xuất phát từ mong muốn thực sự cải thiện chất lượng sống và tiếp
              cận dịch vụ y tế cho mọi người dân. Nó không chỉ là về lợi nhuận,
              mà còn là về một sứ mệnh cao cả hơn.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-start'>
            <img
              src='/images/introduce1.jpg'
              alt='Từ Tâm thực hiện & thành tựu'
              className='rounded-md w-full object-cover max-h-[400px]'
            />
            <div className='space-y-6 text-justify'>
              <div id='tutamthuchien'>
                <h3 className='font-semibold text-lg text-primary-700 mb-1'>
                  "Từ Tâm mà Thực hiện" - Con đường tới Mục tiêu
                </h3>
                <p>
                  <strong>Chất lượng và sự chuyên nghiệp:</strong> "Thực hiện từ
                  tâm" đòi hỏi phải đặt ra những tiêu chuẩn chất lượng cao nhất
                  trong mọi khía cạnh: Từ đội ngũ y bác sĩ, quy trình khám chữa
                  bệnh, đến cơ sở vật chất và công nghệ. Sự tận tâm phải thể
                  hiện qua từng hành động cụ thể, dù là nhỏ nhất.
                </p>
                <p>
                  <strong>Kiên trì và vượt qua thách thức:</strong> Hành trình
                  xây dựng một tập đoàn y tế lớn, đặc biệt là vươn ra quốc tế,
                  sẽ gặp vô vàn khó khăn. "Từ tâm mà thực hiện" nghĩa là giữ
                  vững niềm tin, không ngừng học hỏi, thích nghi và kiên trì
                  theo đuổi mục tiêu, ngay cả khi đối mặt với áp lực.
                </p>
                <p>
                  <strong>Trách nhiệm xã hội:</strong> Thể hiện qua việc cung
                  cấp dịch vụ y tế công bằng, có trách nhiệm, và luôn hướng tới
                  những giải pháp bền vững cho cộng đồng.
                </p>
              </div>

              <div id='tutamthanhtuu'>
                <h3 className='font-semibold text-lg text-primary-700 mb-1'>
                  "Từ Tâm mới Thành tựu" - Ý nghĩa của Sự thành công đích thực
                </h3>
                <p>
                  <strong>Thành tựu toàn diện:</strong> Thành tựu không chỉ là
                  con số doanh thu, lợi nhuận, hay số lượng chi nhánh. Thành tựu
                  lớn nhất chính là sự tin tưởng của bệnh nhân, sức khỏe được
                  cải thiện của cộng đồng, và sự phát triển bền vững của một hệ
                  thống y tế thực sự chất lượng.
                </p>
                <p>
                  <strong>Giá trị trường tồn:</strong> Một thương hiệu được xây
                  dựng trên nền tảng "từ tâm" sẽ có giá trị trường tồn, vượt qua
                  mọi biến động thị trường. Niềm tin của bệnh nhân và uy tín của
                  đội ngũ y bác sĩ là tài sản vô giá mà tiền bạc không thể mua
                  được.
                </p>
                <p>
                  <strong>Hấp dẫn nhân tài và nhà đầu tư:</strong> Khi một doanh
                  nghiệp hoạt động với trái tim và cam kết về giá trị, nó sẽ thu
                  hút được những con người tài năng, tận tâm và cả những nhà đầu
                  tư có cùng tầm nhìn, mong muốn đóng góp vào một điều lớn lao
                  hơn là chỉ lợi nhuận.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export default InspirationOrigin
