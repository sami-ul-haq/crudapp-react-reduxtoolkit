import './App.css';
import Students from './components/Students';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import Student from './components/Student';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <div className="container">
    <Switch>
      <Route exact path="/" component={Students} />
      <Route exact path="/student/:id" component={Student} />
      <Route exact path="/student/:id/edit" component={EditStudent} />
      <Route exact path="/addStudent" component={AddStudent} />
    </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
