import { getChangeThemeValue } from '@/store/slices/ChangeTheme/ChangeThemeSlice';
import { useSelector } from 'react-redux';

const AboutPage = () => {
  const changeTheme = useSelector(getChangeThemeValue);

  return (
    <div className={`${changeTheme ? 'text-white' : 'text-black'}`}>
      <h1>About Page</h1>
      <p>This is the about page. You can put some information about your application here.</p>
    </div>
  );
};

export default AboutPage;
