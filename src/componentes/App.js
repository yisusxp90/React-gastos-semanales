import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import PresupuestoTotal from './PresupuestoTotal';
import PrimerFormulario from './PrimerFormulario';

class App extends Component {

  state = {
    presupuestoTotal : '',
    visible: false
  }

  agregarPresupuesto = (presup) => { 
    this.setState({
      presupuesto : presup,
      visible : true
    })
  }

  render() {
    return (
      <div className="App container">
        <Header
          titulo='Gasto semanal'>
        </Header>

        <div className="contenido-principal contenido">
          <div className="row">
              {(!this.state.visible) ?
              <PresupuestoTotal 
                agregarPresupuesto = {this.agregarPresupuesto}/>
              :
              <PrimerFormulario 
                presupuesto={this.state.presupuesto}
              />
              }
         
          </div>
        </div>
      </div>
    );
  }
}

export default App;
