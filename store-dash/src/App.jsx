import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dasboard/Dashboard';

const App = () => {
  return (
    // <div className='bg-blue-500 justify-center flex items-center'>
    //   <h1 className='flex-col justify-center items-center text-6xl text-fuchsia-700'>
    //     Testing
    //   </h1>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;