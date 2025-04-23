import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Visitante from './pages/Visitante';
import Administrador from './pages/Administrador';
import Equipe from './pages/Equipe';
import Servicos from './pages/Servicos';
import Tarefas from './components/Tarefas';
import DataList from './components/DataList';
import UseLayoutEffectExample from './components/UseLayoutEffectExample';
import TarefasReducer from './components/TarefasReducer';
import FormCadastro from './components/FormCadastro';
import CustomButton from './components/CustomButton';
import FormValidation from './components/FormValidation';
import EventExample from './components/EventExample';
import EventThisExample from './components/EventThisExample';
import CounterBind from './components/CounterBind';
import ButtonWithArg from './components/ButtonWithArg';
import ValueWatcher from './components/ValueWatcher';
import Counter from './components/Counter';

export default function App() {
  return (
    <Router>
      <div className='nav-bar'>
        <Nav />
        <Navigation />
      </div>
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />}>
            <Route path="equipe" element={<Equipe />} />
            <Route path="servicos" element={<Servicos />} />
          </Route>
          <Route path="/contato" element={<Contato />} />
          <Route path="/visitante/:page" element={<Visitante />} />
          <Route path="/administrador/:page" element={<Administrador />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
      <div className='sec-container'>
        <Tarefas />
        <DataList />
        <FormValidation />
        <TarefasReducer />
        <CustomButton text="Clique Aqui" color="#007BFF" onClick={() => alert('Ok')} />
        <FormCadastro />
        <UseLayoutEffectExample />
        <ValueWatcher />
        <ButtonWithArg />
        <EventThisExample />
        <EventExample />
        <CounterBind />
        <Counter />
      </div>
    </Router>
  );
}