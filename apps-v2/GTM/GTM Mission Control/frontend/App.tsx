import { Route, Routes } from 'react-router-dom'
import MissionControl from './pages/MissionControl'

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<MissionControl />} />
    </Routes>
  )
}

