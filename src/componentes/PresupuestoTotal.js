import React, { Component } from 'react';

class PresupuestoTotal extends Component {
    
    presupuestoTotal = React.createRef();

    crearPresupuesto = (e) =>{
        e.preventDefault();
        const presupuestoTotal = this.presupuestoTotal.current.value;
        this.props.agregarPresupuesto(presupuestoTotal);
        e.currentTarget.reset();
    }
    render() {
      return (
        <form onSubmit={this.crearPresupuesto}>

            <div>
                <label>Presupuesto Total</label>
                <input className="u-medium-width" type="text" placeholder="Ej. Transporte" ref={this.presupuestoTotal} />
            </div>
            <input className="button-primary" type="submit" value="Agregar" />
        </form>
      );
    }
  }
  
  export default PresupuestoTotal;