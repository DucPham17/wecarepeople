import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen'
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import SigninScreen from './Screen/SigninScreen';
import SignupScreen from './Screen/SignupScreen';
import PostScreen from './Screen/PostScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="grid-container--header">
          <div className="grid-container--brand">
            <EventAvailableIcon style={{fontSize: 40, color: '#fff', marginRight: 6}}/>
            <Link to="/">WeCarePeople</Link>
          </div>
          <div>
            UserName
          </div>
        </header>
        <main>
          <div className="content">
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/signin" exact={true} component={SigninScreen} />
            <Route path="/signup" exact={true} component={SignupScreen} />
            <Route path="/posts" exact={true} component={PostScreen} />
          </div>
        </main>
        <footer className="grid-container--footer">
          Donate for a happy life
      </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
