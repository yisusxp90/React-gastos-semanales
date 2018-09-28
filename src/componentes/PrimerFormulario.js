import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formaulario from './Formulario';
import Listado from './Listado';
import  {validarPresupuesto} from '../Helper';
import ControlPresupuesto from './ControlPresupuesto';

class PrimerFormulario extends Component {

  componentDidMount(){
    this.obetenerPresupuesto();
  }

  obetenerPresupuesto = () =>{
    let presupuesto = this.props.presupuesto;
    let resultado = validarPresupuesto(presupuesto);
    if(resultado){
      this.setState({
        presupuesto : presupuesto,
        restante : presupuesto
      })
    }else{
      this.obetenerPresupuesto();
    }
  }

  state = {
    presupuesto : '',
    restante : '',
    gastos: {}
  }
  agregarGasto = (gasto) => { 
    //tomar una copia del state actual
    const gastos = {...this.state.gastos};
    gastos[`gasto${Date.now()}`] = gasto;

    this.restarPresupesto(gasto.cantidadGasto);

    this.setState({
      gastos : gastos
    })
  }

  restarPresupesto = (cantidad) =>{
    let resta = Number(cantidad);
    let restante = this.state.restante;
    restante -= resta;
    this.setState({
      restante : restante
    });
  }

  render() {
    return (
      <div className="App container">
        <div className="alert alert alert-success">
            <label>Presupuesto Total: ${this.props.presupuesto}</label>
        </div>
        <div className="contenido-principal contenido">
          <div className="row">        
              <div className="one-half column">
                  <Formaulario 
                  agregarGasto = {this.agregarGasto}/>
              </div>
              <div className="one-half column">
                  <Listado
                    gastos={this.state.gastos} 
                  />
                  <ControlPresupuesto 
                    presupuesto={this.state.presupuesto}
                    restante={this.state.restante}
                  />
              </div>              
          </div>
        </div>
      </div>
    );
  }
}

export default PrimerFormulario;