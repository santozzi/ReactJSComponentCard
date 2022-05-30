import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  let description = <p>Siempre he tenido problemas <b>par aaprender Javascript </b> pero ahora soy lo más en la materia ya que hice un curso re copado que me cambio la vida, y si, soy de Suecia pero escribo en español gracias a google traslate.</p>

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos</h1>
        <Testimonio
          nombre='Emma Whatson'
          pais='Suecia'
          imagen='emma'
          altImagen='imagen de emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Siempre he tenido problemas par aaprender Javascript pero ahora soy lo más en la materia ya que hice un curso re copado que me cambio la vida, y si, soy de Suecia pero escribo en español gracias a google traslate.'
        />
        <Testimonio
          nombre='Jhon Prado'
          pais='Argentina'
          imagen='jhon'
          altImagen='imagen de jhon'
          cargo='Ingeniero de Software'
          empresa='Mercado Libre'
          testimonio={description}
        />
        <Testimonio
          nombre='Mirta Fleaming'
          pais='Canada'
          imagen='mirta'
          altImagen='imagen de mirta'
          cargo='Ingeniera de Software'
          empresa='Google'
          testimonio=<p>Siempre he tenido problemas par <b>aprender Javascript pero ahora soy lo más en la materia</b> ya que hice un curso re copado que me cambio la vida, y si, soy de Suecia pero escribo en español gracias a google traslate.</p>
        />

      </div>
    </div>
  );
}

export default App;
