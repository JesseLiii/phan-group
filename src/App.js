import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CZHome from './components/CZHome';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          {/* <Route path="/customer/:customerID" component={CustomerPage} />
          <Route
            path="/productionHome/:station/:id/"
            component={StationInstructionPage}
          />
          <Route path="/productionHome/:station" component={StationPage} /> */}
          {/* <Route path="/en/products" component={Products} />
          <Route path="/en/services" component={Services} />
          <Route path="/en/references" component={Reference} />
          <Route path="/en/contact" component={Contact} />
          <Route path="/en/gallery" component={Gallery} /> */}
          <Route path="/en" component={Home} />

          {/* <Route path="/cz/products" component={CZProducts} />
          <Route path="/cz/services" component={CZServices} />
          <Route path="/cz/references" component={CZReference} />
          <Route path="/cz/contact" component={CZContact} />
          <Route path="/cz/gallery" component={CZGallery} /> */}
          <Route path="/cz" component={CZHome} />
          <Redirect from="/" to="/en" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
