import React, {Component} from 'react';
import './Note.css';

class Note extends Component {

    constructor(props) { // EL props SE CREAN JUNTO CON LA CLASE, EN ESTE SE RECIBEN LOS DATOS QUE NOS ENVIEN
        super();
        this.id = props.id;//SE USA props.id POR QUE id ES EL NOMBRE DEL PARÁMETRO QUE STAMOS RECIBIENDO
        this._fechaPrestamo = props._fechaPrestamo;
        this.nombre = props.nombre;
        this.articulos = props.articulos;
        this.status = props.status;
        this._fechaEntrega = props._fechaEntrega;
    }

    render() {
        return (
            
            <div className="Note">
                
                    {/*SI USAMOS ATRIBUTOS EN LA CLASE TENEMOS QUE RECIBIR EL OBJETO props EN EL CONSTRUCTOR*/}
                    
                    <div className="cardNote">                        
                        <span>Fecha prestamo: {this._fechaPrestamo}</span>
                        <br/>
                        <span>Nombre: {this.nombre}</span>
                        <br/>
                        <span>Articulos: { this.articulos }</span>
                        <br/>
                        <span>Status: { this.status }</span>
                        <button className="btn" onClick={() => this.entrega(this.id)}>
                            Entrega
                        </button>
                    </div>
                    
                    {/*TAMBIEN SE PUEDE USAR DE ESTA MANERA Y SI LO HACESMOS ASÍ NO TENDREMOS QUE USAR EL props
                     EN EL CONSTRUCTOR DE LA CLASE, PERO SI NO USAMOS EL CONSTRUCTOR TENDREMOS UN MENSAJE DE ADVERTENCIA EN LA CONSOLA
                     DEL NAVEGADOR
                    <li>Id: {this.props.id} - Nombre: { this.props.nombre }</li>
                    */}
                
            </div>
        )        
    }

    entrega(id) {
        console.log(id);
    }
 
}

export default Note;