import React, {Component} from 'react';
import './NoteForm.css';
//import '/src/css/all.min.css';

class NoteForm extends Component {
    
    constructor() {
        super();
    }

    render() {
        return (
            <div className="noteForm">
                <div name="noteform" className="form">
    <input type="text" name="alumno" className="inputItem" placeholder="Alumno" ref={input => {this.txtinput = input;}}/>{/*EL ATRIBUTO ref ES COMO SI FUERA UN ATRIBUTO id, 
    LO VAMOS A USAR PARA PODER OBTENER SU VALOR, EN ESTE CASO ESTAMOS USANDO EL NOMBRE txtinput PARA QUE PODAMOS HACER REFERENCIA AL ELEMENTO DESDE CUALQUIER PARTE DEL CÓDIGO*/}
                    <select name="articulos" className="inputItem arrowDown" placeholder="Articulo" ref={sel => {this.selart = sel}}>
                        <option value="0"></option>
                        <option value="Videoproyector">Videoproyector</option>
                        <option value="Cable VGA">Cable VGA</option>
                        <option value="Extension">Extensión</option>
                        <option value="Multicontacto">Multicontacto</option>
                        <option value="Mouse">Mouse</option>
                        <option value="Calculadora">Calculadora</option>
                    </select>
                    <button onClick={() => this.addRegister()} className="btn btn-save">
                        Guardar
                    </button>
                </div>
            </div>
        );
    }

    addRegister() {
        //console.log("Nombre: " + this.txtinput.value + " Articulos: " + this.selart.value);
        let data;
        
        data = [
            {nombre: this.txtinput.value, articulos: this.selart.value}
        ];
        /*for(let a of data) {
            console.log(a);            
        }*/
        console.log("data:\n" + "nombre: " + data.nombre + "\narticulos: " + data.articulos);
        
        this.props.entregaArt(data);
    }

}

export default NoteForm;