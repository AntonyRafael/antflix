import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Link } from 'react-router-dom';


import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';
import PageDefault from './components/PageDefault';
function error404() {
  return (
    <PageDefault>
      <h1>Chegou no limbo</h1>
      <p>ERROR 404 - Page not found</p>
      <Link to="/">Voltar para a home</Link>
    </PageDefault>

  )
}
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={error404} />

    </Switch>


  </BrowserRouter>,

  document.getElementById('root')
);


