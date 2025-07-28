import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import PrivateRoute from './PrivateRoute'
import Introduce from '@/pages/Introduce'
import WhoWeAre from '@/pages/Introduce/Child/WhoWeAre'
import Vision from '@/pages/Introduce/Child/Vision'
import Mission from '@/pages/Introduce/Child/Mission'
import CoreValues from '@/pages/Introduce/Child/CoreValues'
import WhyChooseWe from '@/pages/Introduce/Child/WhyChooseWe'
import InspirationOrigin from '@/pages/InspirationOrigin'
import EducationTraditional from '@/pages/EducationTraditional'
import ChamSocTuTam from '@/pages/EducationTraditional/Child/ChamSocTuTam'
import CongDongTuTam from '@/pages/EducationTraditional/Child/CongDongTuTam'
import DieuTriTuTam from '@/pages/EducationTraditional/Child/DieuTriTuTam'
import YTeTuTam from '@/pages/EducationTraditional/Child/YTeTuTam'
import TuTamKhoiY from '@/pages/InspirationOrigin/Child/TuTamKhoiY'
import TuTamThanhTuu from '@/pages/InspirationOrigin/Child/TuTamThanhTuu'
import TuTamThucHien from '@/pages/InspirationOrigin/Child/TuTamThucHien'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      {/* Route giới thiệu */}
      <Route path='/introduce' element={<Introduce />} />
      <Route path='/whoweare' element={<WhoWeAre />} />
      <Route path='/vision' element={<Vision />} />
      <Route path='/mission' element={<Mission />} />
      <Route path='/corevalues' element={<CoreValues />} />
      <Route path='/whychoosewe' element={<WhyChooseWe />} />
      <Route path='/inspirationrigin' element={<InspirationOrigin />} />
      <Route path='/educationtraditional' element={<EducationTraditional />} />
      <Route path='/chamsoctutam' element={<ChamSocTuTam />} />
      <Route path='/congdongtutam' element={<CongDongTuTam />} />
      <Route path='/dieutritutam' element={<DieuTriTuTam />} />
      <Route path='/ytetutam' element={<YTeTuTam />} />
      <Route path='/tutamkhoiy' element={<TuTamKhoiY />} />
      <Route path='/tutamthanhtuu' element={<TuTamThanhTuu />} />
      <Route path='/tutamthuchien' element={<TuTamThucHien />} />

      <Route element={<PrivateRoute />}>
        {/* Thêm private route vào đây */}
      </Route>
    </Routes>
  )
}

export default AppRoutes
