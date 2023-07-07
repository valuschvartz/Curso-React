import React from 'react';
import { Link } from 'react-router-dom'; 
import clases from '../../assets/images/clases.jpg';
import viaje from '../../assets/images/viaje.jpg';
import '../../assets/css/animaciones.css'
import LoadingSpinner from '../../components/LoadingSpinner'

function Servicios() {
    document.title = 'Ojala Te Enamores! Servicios';
    if(viaje === undefined){
        return <section id="menu" className="py-5 text-center container">
        <div className="album bg-degrade py-5">
        <div className="container">
          <div className="">
          <LoadingSpinner />
          </div></div></div>
      </section>
    }
  return (
    <section className="slide-in-fwd-center">
  <section>
    <article>
      {/* Call to action o hero para mobile */}
      <div className="px-4 py-2 my-5 text-center d-lg-none d-xl-none">
        <img className="d-block mx-auto img-fluid mb-4" src={clases} alt="clase" />
        <h1 className="display-5 fw-bold">¡Veni a nuestras clases!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            ¡Aprende a hacer macarons como un profesional en nuestra clase especializada! Descubre los secretos de la repostería francesa mientras nuestro experto chef te guía a través del proceso de creación de estos dulces delicados y deliciosos</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to=""><button type="button" className="btn btn-primary btn-lg px-4 gap-3">Más info</button></Link>
            <Link to="/contacto"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Contratar</button></Link>
          </div>
        </div>
      </div>
      {/* Call to action o hero para desktops */}
      <div className="container col-xxl-8 px-4 py-2 d-none d-lg-block">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={clases} className="d-block mx-lg-auto img-fluid" alt="llevamosnuestrosmeseros" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">¡Veni a nuestras clases!</h1>
            <p className="lead">
              ¡Aprende a hacer macarons como un profesional en nuestra clase especializada! Descubre los secretos de la repostería francesa mientras nuestro experto chef te guía a través del proceso de creación de estos dulces delicados y deliciosos</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to=""><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Más info</button></Link>
              <Link to="/contacto"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Contratar</button></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section> <section>
    <article>
      {/* Hero para mobile */}
      <div className="px-4 py-2 my-5 text-center d-lg-none d-xl-none">
        <img className="d-block mx-auto img-fluid mb-4" src={viaje} alt="viaje" />
        <h1 className="display-5 fw-bold">¡Conoce NYC y Miami!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Descubre los pasteles icónicos de Nueva York y los exquisitos postres tropicales de Miami.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to=""><button type="button" className="btn btn-primary btn-lg px-4 gap-3">Más info</button></Link>
            <Link to="/contacto"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Contratar</button></Link>
          </div>
        </div>
      </div>
      {/* Call to action o hero para desktops */}
      <div className="container col-xxl-8 px-4 py-2 d-none d-lg-block">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={viaje} className="d-block mx-lg-auto img-fluid" alt="Pedí Online" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">¡Conoce NYC y Miami!</h1>
            <p className="lead">Descubre los pasteles icónicos de Nueva York y los exquisitos postres tropicales de Miami.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to=""><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Más info</button></Link>
              <Link to="/contacto"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Contratar</button></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</section>
  )
}

export default Servicios