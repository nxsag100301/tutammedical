import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import PrivateRoute from './PrivateRoute'
import Introduce from '@/pages/Introduce'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/introduce' element={<Introduce />} />
      <Route element={<PrivateRoute />}>
        {/* Thêm private route vào đây */}
      </Route>
    </Routes>
  )
}

export default AppRoutes
