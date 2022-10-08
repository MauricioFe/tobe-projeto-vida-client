import {  Routes, Route } from 'react-router-dom'
import Calendar from './components/Features/Calendar/Calendar';
import Container from './components/Features/MyCourses/Container';
import PhraseBox from './components/Features/PhraseBox/PhraseBox';
import ProfileTest from './components/Features/ProfileTest/ProfileTest';
import Home from './pages/Home';
function App() {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element ={<Container/>}>
              <Route path='caixinha-frase' element={<PhraseBox/>}/>
              <Route path='teste-perfil' element={<ProfileTest/>}/>
              <Route path='calendario' element={<Calendar/>}/>
          </Route>
        </Routes>      
  )
}

export default App;
