
import {  Route, Routes, BrowserRouter } from 'react-router-dom'
import PageNotFound from './404';
import Home from './Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
