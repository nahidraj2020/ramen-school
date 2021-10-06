import logo from './logo.svg';
import './App.css';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import About from './componants/About/About';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './componants/NotFound/NotFound';
import Services from './componants/Services/Services';
import Contact from './componants/Contact/Contact';
import Footer from './componants/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="">
            <NotFound></NotFound>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>
         
        </Switch>
        <Footer></Footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
