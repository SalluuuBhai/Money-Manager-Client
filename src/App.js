import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Income from './components/income/Income';
import Expense from './components/expense/Expense';
import NoPage from './components/nopage/NoPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
            <Dashboard/>
        </Route>

        <Route path={"/income"}>
            <Income/>
        </Route>

        <Route path={"/expense"}>
            <Expense/>
        </Route>

        <Route path={"**"}>
            <NoPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
