import React, { Component } from 'react';
import Note from './components/Notes/Note';
import NoteForm from './components/NoteForm/NoteForm';
//import logo from './logo.svg';
import './App.css';
import './css/all.min.css'

class App extends Component {
  //INICIAMOS EL CONTRUCTOR PARA PODER GUARDAR LAS NOTAS EN EL ESTADO
  constructor() {
    //LLAMAMOS AL MÉTODO super PARA HEREDAR TODAS LAS PROPIEDADES DE LA CLASE PADRE
    super();
    /*EL state SE VA A ENCARGAR DE ALMACENAR LOS DATOS DE LA APLICACIÓN, ESTO PODRÍAN VENIR DESDE UN BACKEND,
    PERO PARA ESTA APP LOS DATOS VENDRAN DE FIREBASE */
    this.state = {
      notes: [
        {id: 1, _fechaPrestamo: this.obtFecha(), nombre: 'Alumno', articulos: 'Cable VGA', status: "Prestado", _fechaEntrega: ""},
        {id: 2, _fechaPrestamo: this.obtFecha(), nombre: 'Alumno1', articulos: 'Videoproyector', status: "Prestado", _fechaEntrega: ""},
        {id: 3, _fechaPrestamo: this.obtFecha(), nombre: 'Alumno1', articulos: 'Mouse', status: "Prestado", _fechaEntrega: ""}
      ]     
    };
  }
  render() {
    return (
      <div className="AppNotes">
        <div>
          <h1 className="titleApp">React y Firebase App</h1>          
        </div>
        <div className="notesBody">
          
            {//SE USAN LAS LLAVES PARA "DECIRLE" QUE VAMOS A USAR JS
              //USAMOS map PARA RECORRER EL AREGLO DE LAS NOTAS
              this.state.notes.map( note => {
                return (                  
                  //<li key={note.id}>{note.nombre}</li>//EL key={note.id} SE USA PARA QUETAR LA ADVERTANCIA QUE APARECE EN EL NAVEGADOR ACERCA DE QUE CADA HIJO NENCESITA UN ID ÚNICO
                  <Note //LE PASAMOS LOS DATOS AL COMPONENTE
                    //ESTOS DATOS VIAJARAN COMO PARAMETRO PARA EL COMPONENTE Note
                    id = {note.id}
                    _fechaPrestamo = {note._fechaPrestamo}
                    nombre = {note.nombre}
                    articulos = {note.articulos}
                    status = {note.status}
                    _fechaEntrega = {note._fechaEntrega}
                    key={note.id}
                  />
                )
              })
              
            }
          
        </div>
        <div className="notesfooter">
          <NoteForm entregaArt={() => this.addRegister()} />{/* CON entregaArt={this.entregaArt()} LE ESTAMOS PASANDO LOS DATOS AL FORMULARIO */}
        </div>
      </div>
    );
  }

  obtFecha() {
    let d = new Date();
    let month = 0;    
    let hour = 0;
    let minute = 0;
    let second = 0;
    month = this.concatenateCero(d.getMonth());    
    hour = this.concatenateCero(d.getHours());
    minute = this.concatenateCero(d.getMinutes());
    second = this.concatenateCero(d.getSeconds());
    return d.getDate() + "/" + month + "/" + d.getFullYear() + " - " + hour + ":" + minute  + ":" + second;
  }

  concatenateCero(param) {
    return (param) < 10 ? "0" + (param + 1) : (param);
  }

  /* ESTE MÉTODO LO UNICO QUE HACE ES AREGAR LOS NUEVOS DATOS AL ARREGLO */
  addRegister(data) {
    let { notes } = this.state;//CON ESTA LINEA ESTAMOS GUARDANDO LAS NOTAS QUE TENEMOS EN EL ESTADO
    console.log("nombre: ", this.data.nombre);
    notes.push({
      id: notes.length + 1,
      _fechaPrestamo: this.obtFecha(),
      nombre: data.nombre,
      articulos: data.articulos,
      status: 1,
      _fechaEntrega: ""
    });
    this.setState({//ESTALINEA SE USA PARA ACTUALIZAR EL STATE
      notes //ASIGNAMOS LAS NUEVAS NOTAS AL ARREGLO NOTES QUE YA TENEMOS    
    });
  }
}

export default App;
/*
EN EL notesbody SE MOSTRARAN LAS NOTAS QUE TENGAMOS, ESTAS SE GUARDARAN EN EL ESTADO,
PARA HACERLO TENEMOS QUE INICIAR EL CONSTRUCTOR
EN EL notesfooter IRÁ UN FORMULARIO QUE NOS PERMITA INGRESAR DATOS PARA LAS NOTAS
*/