
import './App.css';
import CurrencyConvert from './Components/CurrencyConvert';
import DataFetching from './Components/DataFetching';
import FetchData1 from './Components/FetchData1';
import FetchData2 from './Components/FetchData2';
import FetchData3 from './Components/FetchData3';
import NewFile1 from './Components/NewFile1';
import PostData from './Components/PostData';
import PostData1 from './Components/PostData1';
import PostData2 from './Components/PostData2';
import Signup from './Components/Signup';
import SendData from './Components/SendData'
import Bootstrap from './Components/Bootstrap';
import Myheader from './Components/Myheader';
import SuperAdminPanel from './Components/SuperAdminPanel';
import Dashboard from './Components/Dashboard';
import {BrowserRouter, Route,Link} from 'react-router-dom'
import Districts from './Components/Districts';
import Schools from './Components/Schools';
import Habits from './Components/Habits';
import Quries from './Components/Quries';
import PushNotifications from './Components/PushNotifications';
import WebControls from './Components/WebControl';
import Settings from './Components/Settings';
function App() {
  return  (
    <BrowserRouter>
    <div className="App">
      
      
        <Route exact path="/" component={SuperAdminPanel}/>
        <Route  path="/dashboard" component={Dashboard}/>
        <Route  path="/districts" component={Districts}/>
        <Route  path="/schools" component={Schools}/>
        <Route  path="/habits" component={Habits}/>
        <Route  path="/quries" component={Quries}/>
        <Route  path="/pushnotifications" component={PushNotifications}/>
        <Route  path="/webcontrols" component={WebControls}/>
        <Route  path="/settings" component={Settings}/>
    </div>
    </BrowserRouter> 
  );
}

export default App;
