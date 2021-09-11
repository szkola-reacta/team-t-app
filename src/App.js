import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Page from './components/Page';
import Slider from './components/Slider/Slider';
import Player from './components/Player/Player';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Page Component={Slider}/>}/>
          <Route exact path="/player" component={() => <Page Component={Player}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
