import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import torta from '../../assets/images/torta.webp';
import './Inicio.css'
import '../../assets/css/animaciones.css'
import LoadingSpinner from '../../components/LoadingSpinner/';


function Inicio() {
  
  document.title = 'Ojala Te Enamores Inicio';


  if(torta === undefined){
    return <section id="menu" className="py-5 text-center container">
    <div className="album bg-degrade py-5">
    <div className="container">
      <div className="">
      <LoadingSpinner />
      </div></div></div>
  </section>
  }
  return (
<div>
  <section className="heroportada position-relative pt-48 pb-40 bg-dark bg-cover bg-size--cover slide-in-fwd-center">
    {/* Overlay */}
    <span className="position-absolute top-0 start-0 w-full h-full bg-dark opacity-80" />
    {/* Contenido */}
    <div className="container-lg max-w-screen-xl position-relative overlap-10 text-center text-lg-start pt-5 pb-5 pt-lg-6">
      <div className="row row-grid align-items-center">
        <div className="col-lg-8 text-center text-lg-start">
          {/* Título */}
          <h1 className="ls-tight font-bolder display-5 text-black mb-5">
            ¡Somos especialistas en Macarons!
          </h1>
          {/* Texto */}
          <p className="lead text-black text-opacity-80 mb-10 w-lg-2/3">
            Contamos con los ingredientes de la más alta calidad y una experta cocinera dedicada exclusivamente a la creación de los macarons más exquisitos
            {/* Botones */}
          </p><div className="mt-10 mx-n2">
            <Link to="/" className="btn btn-lg btn-primary shadow-sm mx-2 px-lg-8">
              Agenda tus clases Online!
            </Link>
            <Link to="" className="btn btn-lg btn-primary bg-success py-2 mx-2 px-lg-8">
              Promociones
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <article>
      
      {/* Call to action o hero para desktops */}
      <div className="container col-xxl-8 px-4 py-2 d-none d-lg-block">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={torta} className="d-block mx-lg-auto img-fluid" alt="Pedí Online" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">¡No te quedes sin tu lugar!</h1>
            <p className="lead">No pierdas tiempo y agenda tus clases de macarons ahora mismo. ¡Reserva tu lugar ahora y prepárate para una experiencia deliciosa y divertida!</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to=""><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Productos</button></Link>
              
            </div>
          </div>
        </div>
      </div>
    </article>
   </section>        
  
</div>
  )
}

export default Inicio; 