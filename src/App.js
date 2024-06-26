import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import { RiHomeHeartFill } from "react-icons/ri";

import MyClock from './02/MyClock';
import Lotto from './05/Lotto';
import BoxOffice from './06/BoxOffice';
import FoodMain from './07/FoodMain';
import Traffic from './08_1/Traffic';
import Gallery from './10/Gallery';
import Festival from './11/Festival'; 
import Frcst from './13/Frcst';
import FrcstList from './13/FrcstList';
import RecoilMain from './14/RecoilMain';
import Rest from './15/Rest';
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col w-full max-w-screen-lg h-screen mx-auto">
        <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200'>
          <p>리액트 실습</p>
          <ul className='flex justify-center items-center text-sm'>
            <li className='mx-2 p-2 rounded-md
                         hover:bg-white hover:text-blue-600'>
              <Link to='/'>시계</Link>
            </li>
            <li className='mx-2 p-2 rounded-md hover:bg-white
                         hover:bg-white hover:text-blue-600'>
              <Link to='/lotto'>로또</Link>
            </li>
            <li className='mx-2 p-2 rounded-md hover:bg-white
                         hover:bg-white hover:text-blue-600'>
              <Link to='/box'>일일박스오피스</Link>
            </li>
            <li className='mx-2 p-2 rounded-md hover:bg-white
                         hover:bg-white hover:text-blue-600'>
              <Link to='/food'>푸드뱅크</Link>
            </li>
            <li className='mx-2 p-2 rounded-md hover:bg-white
                         hover:bg-white hover:text-blue-600'>
              <Link to='/traffic'>교통사고통계</Link>
            </li>
            <li className='mx-2 p-2 rounded-md hover:bg-white
                         hover:bg-white hover:text-blue-600'>
              <Link to='/photo'>관광사진</Link>
            </li>
            <li className='mx-2 p-2 rounded-md hover:bg-white
                         hover:bg-white hover:text-blue-600'>
              <Link to='/festival'>축제</Link>
            </li>
            <li className='mx-2 p-2 rounded-md hover:bg-white
                         hover:bg-white hover:text-blue-600'>
              <Link to='/frcst'>단기예보</Link>
            </li>
            <li className='mx-2 p-2 rounded-md hover:bg-white
                         hover:bg-white hover:text-blue-600'>
              <Link to='/recoil'>Recoil</Link>
            </li>
            <li className='mx-2 p-2 rounded-md hover:bg-white
                         hover:bg-white hover:text-blue-600'>
              <Link to='/rest'>Restfull</Link>
            </li>
          </ul>
          <p>
            <Link to='/'><RiHomeHeartFill className='text-3xl text-green-900' /></Link>
          </p>
        </header>
        <main className='grow w-full flex justify-center items-center overflow-y-auto '>
          <Routes>
            <Route path='/' element={<MyClock />} />
            <Route path='/lotto' element={<Lotto />} />
            <Route path='/box' element={<BoxOffice />} />
            <Route path='/food' element={<FoodMain />} />
            <Route path='/traffic' element={<Traffic />} />
            <Route path='/photo' element={<Gallery />} />
            <Route path='/festival' element={<Festival />} /> 
            <Route path='/frcst' element={<Frcst />} /> 
            <Route path='/frcstlt' element={<FrcstList />} /> 
            <Route path='/recoil' element={<RecoilMain />} /> 
            <Route path='/rest' element={<Rest />} /> 
          </Routes>
        </main>
        <footer className='flex justify-center items-center h-20 bg-black text-slate-100'>
          ⓒ Ryu Eo Jin , K-Digital-7
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;