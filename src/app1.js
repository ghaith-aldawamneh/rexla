import './App.css';
import {BrowserRouter, Switch, Route} from  'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
