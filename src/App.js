import './App.css';
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen'
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import SigninScreen from './Screen/SigninScreen';
import SignupScreen from './Screen/SignupScreen';
import PostScreen from './Screen/PostScreen';

function App() {

  const userInfo = useSelector(state => state.signin);

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="grid-container--header">
          <div className="grid-container--brand">
            <EventAvailableIcon style={{fontSize: 40, color: '#fff', marginRight: 6}}/>
            <Link to="/">WeCarePeople</Link>
          </div>
          <div className='signin-title'>
            {userInfo != null? userInfo.userInfo != null?<a href='/posts'>
              {userInfo.userInfo.displayName}</a> :<a href='/signin'>Sign In</a>: <a href='/signin'>Sign In</a>}
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
