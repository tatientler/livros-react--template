import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Livro Lista</Link>
          </li>
          <li className="nav-item">
            <Link to="/dados" className="nav-link">Livro Dados</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={LivroLista} />
        <Route path="/dados" component={LivroDados} />
      </Switch>
    </Router>
  );
}

export default App;
