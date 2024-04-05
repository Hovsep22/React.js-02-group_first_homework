import AboutPageAsync from '@/pages/AboutPage/AboutPage.async';
import MainPageAsync from '@/pages/MainPage/MainPage.async';
import { Link, Route, Routes } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { getChangeThemeValue, setChangeTheme } from '@/store/slices/ChangeTheme/ChangeThemeSlice';

const App = () => {
  const dispatch = useDispatch();
  const changeTheme = useSelector(getChangeThemeValue);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      dispatch(setChangeTheme(e.matches));
    };

    
    darkModeMediaQuery.addEventListener('change', handleChange);
    dispatch(setChangeTheme(darkModeMediaQuery.matches));

    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, [dispatch]);

  const handleThemeChange = () => {
    dispatch(setChangeTheme(!changeTheme));
  };

  // let darkMode = window.matchMedia('(prefers-color-scheme: dark)');
  // if (darkMode.matches) {
  //   console.log('dark mide');
  // } else {
  //   console.log('light mode');
  // }

  return (
    <div className={`flex flex-col h-screen ${changeTheme ? 'bg-black text-white' : 'bg-white'}`}>
      <nav className="bg-slate-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex">
              <Link to="/" className="text-zinc-600 px-3 py-2 rounded-md text-md font-semibold">
                Main
              </Link>
              <Link
                to="/about"
                className="text-zinc-600 px-3 py-2 rounded-md text-md font-semibold">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div>
        <Button className="absolute top-0 right-0 m-2 p-2" onClick={handleThemeChange}>
          Change Theme -{changeTheme ? 'Light' : 'Dark'}
        </Button>
      </div>

      <div className="flex-grow py-5">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<MainPageAsync />} />
            <Route path="/about" element={<AboutPageAsync />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
