import './App.css';
import Graphcomp from './Graphcomp';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Victorycomp from './Victorcomp';
import { LineChart } from './LineChart';
import { LineGraph } from './LineGraph';

function App() { 

  return (
    <div>
    <BrowserRouter>
    <div>
      <Switch>
        <Route path="/graph" component={Graphcomp}>
        </Route>
        <Route path="/victory" component={Victorycomp}>
        </Route>
        <Route path="/line" component={LineGraph}>
        </Route>
        <Route path="/linechart" component={LineChart}>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
    <Graphcomp/>
    </div>
  );
}

export default App;
