import ProfileImage from './components/ProfileImage';
import ProfileInformation from './components/ProfileInformation';
import ProfilePrimarySocial from './components/ProfilePrimarySocial';
import ProfileAbout from './components/ProfileAbout';
import ProfileFooterSocial from './components/ProfileFooterSocial';
import './App.css';

function App() {
  return (
    <div className="App">
        <ProfileImage />
        <div className="main-content">
            <ProfileInformation />
            <ProfilePrimarySocial />
            <ProfileAbout />
        </div>
        <ProfileFooterSocial />
    </div>
  );
}

export default App;
