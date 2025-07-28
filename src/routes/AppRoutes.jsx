import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import PrivateRoute from './PrivateRoute'
import Introduce from '@/pages/Introduce'
import WhoWeAre from '@/pages/Introduce/Child/WhoWeAre'
import Vision from '@/pages/Introduce/Child/Vision'
import Mission from '@/pages/Introduce/Child/Mission'
import CoreValues from '@/pages/Introduce/Child/CoreValues'
import WhyChooseWe from '@/pages/Introduce/Child/WhyChooseWe'
import InspirationOrigin from '@/pages/Introduce/Child/InspirationOrigin'
import EducationTraditional from '@/pages/Introduce/Child/EducationTraditional'

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

      <Route element={<PrivateRoute />}>
        {/* Thêm private route vào đây */}
      </Route>
    </Routes>
  )
}

export default AppRoutes
