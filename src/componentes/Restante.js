import React, { Component } from 'react';
import  {revisarPresupuesto} from '../Helper';
import PropTypes from 'prop-types';

class Restante extends Component {
    
    render() { 
      const presupuesto = this.props.presupuesto;
      const restante = this.props.restante;  
      return (
        <div className={revisarPresupuesto(presupuesto,restante)}>
            Restante: $ {this.props.restante}
        </div>
      );
    }
  }
  Restante.protTypes = {
    restante: PropTypes.string.isRequired,
    presupuesto: PropTypes.number.isRequired
  }  
  export default Restante;