import "./App.css";
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.bundle'
// import 'bootstrap/dist/css/bootstrap.min.css'

import { Container } from "./components/index";
import { Header, Footer } from "./Sections/index";
import { Home, Profile , Browser } from "./Pages/index";

const App= ()=> {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Browser" component={Browser} />
            <Route exact path="/Profile" component={Profile} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </>
  )
};

export default App;
