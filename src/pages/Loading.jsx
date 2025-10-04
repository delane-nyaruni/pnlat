import { useState, useEffect } from 'react';
import { GiCoins} from 'react-icons/gi';
import { BsGraphUp as Profit} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Loading = () => {
   const [darkMode, setDarkMode] = useState(localStorage.getItem('dark-mode') === 'enabled');
    useEffect(() => { 
      document.body.classList.toggle('dark-mode', darkMode); 
      localStorage.setItem('dark-mode', darkMode ? 'enabled' : 'disabled');
     }, [darkMode]); 
  const [coin, setCoin] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const totalDuration = 1000; // 3 seconds
    const steps = 10;
    const intervalTime = totalDuration / steps; // ~30ms per step

    const intervalId = setInterval(() => {

      setCoin((prev) => {
        if (prev >= 100) {
          clearInterval(intervalId);
          navigate('/pnlat/dashboard');
          // navigate('/');
          // navigate('/login');
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(intervalId);
  }, [navigate]);

  return (
    <>
    <div onLoad={() => setDarkMode(!darkMode)} className="container d-flex flex-column justify-content-center align-items-center text-center loadingBody vh-100 ">
      <GiCoins size={120} aria-valuemin="0" aria-valuemax="100" aria-valuenow={coin} style={{ width: `${coin}%` }} className='abs coins text-bar text-bar-striped text-bar-animated ' />
      <Profit size={160} className='abs profit text-success text-bar text-bar-striped text-bar-animated ' />
      {/* <Loss size={160} className='abs loss red text-bar text-bar-striped text-bar-animated ' /> */}
      <h5 className="mb-5 MT7">
        <span className='text-success'>P</span><span className='text-gray-500'>n</span><span className='red'>L</span> <span className='text-gray-500'>Asset Tracker</span> 
       </h5>
      <Footer />
    </div>
    </>
  );
};

export default Loading;
