import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const EducationTraditional = () => {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location])

  return (
    <div className='px-6 lg:px-20 my-10 space-y-8'>
      <h2 className='font-bold text-2xl lg:text-3xl uppercase text-center text-primary-600'>
        Giáo dục truyền thống
      </h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-start'>
        <div className='space-y-6 text-justify'>
          <div id='ytetutam'>
            <h3 className='font-semibold text-lg text-primary-700 mb-1'>
              Y tế Từ Tâm - Nâng tầm Sức khỏe
            </h3>
            <p>
              Câu này có nghĩa là: Khi dịch vụ y tế được thực hiện bằng cả tấm
              lòng, sự tận tâm và lòng trắc ẩn ("Từ Tâm"), thì chất lượng chăm
              sóc và kết quả điều trị sẽ được cải thiện đáng kể, từ đó nâng cao
              và cải thiện trình độ sức khỏe của cộng đồng lên một tầm cao mới.
              Đây không chỉ là việc chữa bệnh mà còn là chăm sóc toàn diện với
              sự đồng cảm.
            </p>
          </div>

          <div id='dieutritutam'>
            <h3 className='font-semibold text-lg text-primary-700 mb-1'>
              Điều trị Từ Tâm - Nâng tầm Y Đức
            </h3>
            <p>
              Câu này muốn nói rằng: Phương pháp điều trị bệnh không chỉ dừng
              lại ở kiến thức chuyên môn hay kỹ thuật, mà còn phải xuất phát từ
              lòng nhân ái, sự thấu hiểu và trách nhiệm của người thầy thuốc
              ("Từ Tâm"). Khi đó, đạo đức nghề nghiệp của ngành y tế (Y Đức) sẽ
              được nâng cao, thể hiện sự tôn trọng và coi trọng bệnh nhân.
            </p>
          </div>
        </div>
        <img
          src='/images/introduce2.jpg'
          alt='Y tế Từ Tâm'
          className='rounded-md w-full object-cover max-h-[400px]'
        />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-start'>
        <img
          src='/images/introduce1.jpg'
          alt='Chăm sóc Từ Tâm'
          className='rounded-md w-full object-cover max-h-[400px]'
        />
        <div className='space-y-6 text-justify'>
          <div id='chamsoctutam'>
            <h3 className='font-semibold text-lg text-primary-700 mb-1'>
              Chăm sóc Từ Tâm - Nâng tầm Giá trị
            </h3>
            <p>
              Câu này có ý nghĩa: Việc chăm sóc bệnh nhân, người thân hay những
              người cần giúp đỡ bằng sự quan tâm sâu sắc, tận tình và chân thành
              ("Từ Tâm") sẽ mang lại giá trị to lớn. Giá trị ở đây không chỉ là
              sự hài lòng của người bệnh, mà còn là sự tin tưởng, niềm hy vọng
              và sự an ủi, từ đó nâng cao ý nghĩa và hiệu quả của mọi hành động
              chăm sóc.
            </p>
          </div>

          <div id='congdongtutam'>
            <h3 className='font-semibold text-lg text-primary-700 mb-1'>
              Cộng đồng Từ Tâm - Nâng tầm Lan tỏa
            </h3>
            <p>
              Câu này nhấn mạnh: Khi một cộng đồng cùng nhau hành động với tinh
              thần nhân ái, sẻ chia và lòng trắc ẩn ("Từ Tâm"), thì những điều
              tốt đẹp, những giá trị nhân văn sẽ được phổ biến rộng rãi hơn, lan
              tỏa mạnh mẽ hơn trong xã hội. Điều này tạo nên một môi trường sống
              tích cực và đầy yêu thương.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationTraditional
