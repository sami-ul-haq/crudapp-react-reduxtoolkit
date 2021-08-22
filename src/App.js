import './App.css';
import Students from './components/Students';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import Student from './components/Student';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Students} />
      <Route exact path="/student/:id" component={Student} />
      <Route exact path="/student/:id/edit" component={EditStudent} />
      <Route exact path="/addStudent" component={AddStudent} />
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
