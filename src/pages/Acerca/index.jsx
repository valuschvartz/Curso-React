import React from 'react'

import jefa from '../../assets/images/perfil.png';

import prod from '../../assets/images/prod.jpg';
import tour from '../../assets/images/tour.jpg';
import { Link } from 'react-router-dom';
import '../../assets/css/animaciones.css'
import LoadingSpinner from '../../components/LoadingSpinner';

function Acerca() {
    document.title = 'Ojala Te Enamores Acerca de Nosotros';
    if(tour === undefined){
        return <section id="menu" className="py-5 text-center container">
        <div className="album bg-degrade py-5">
        <div className="container">
          <div className="">
          <LoadingSpinner />
          </div></div></div>
      </section>
    }
    return (
        <div className="slide-in-fwd-center">
        <div className="container marketing">
          <div className="row mx-auto align-middle text-center py-4">
           
            <div className="col-lg-4 mx-auto">
              <img src={jefa} className="img-fluid mx-auto" alt="Lorena Malamud" />
              <h2>Nuestra CEO <p>Lorena Malamud</p></h2>
              <p>Pastelera graduada del IAG, dando clases hace mas de 10 años</p>
              <p><Link to="" className="btn btn-secondary">Más info »</Link></p>
            </div>
            
          </div>
          {/* Nuestra ética */}
         
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">Nuestra pasión es enseñar. <span className="text-muted"><p>Y se nota en las clases.</p></span></h2>
              <p className="lead">Descubre una experiencia única de aprendizaje y deleite con una destacada profesora especializada en la fabricación de macarons. Aprende los secretos y técnicas para crear macarons perfectos en clases interactivas. Desde la selección de ingredientes hasta la decoración, esta experiencia te permitirá perfeccionar tus habilidades en la repostería y crear combinaciones de sabores deliciosas. No importa si eres principiante o experto, esta oportunidad de aprender de una maestra de los macarons te llevará a un nuevo nivel de pasión por la repostería. Disfruta de esta experiencia culinaria única y déjate cautivar por el encanto de los exquisitos macarons.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <img src={prod} className="img-fluid mx-auto" alt="cheffdehabemuspapavictorvondoomcocinando" />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Tour Pastelero. <span className="text-muted"><p>Nuestro sueño</p></span></h2>
              <p className="lead">
                Descubre un viaje pastelero por Nueva York y Miami, donde podrás disfrutar de los mejores sabores dulces en cada esquina. Desde los icónicos pasteles de Nueva York hasta los exquisitos postres tropicales de Miami, esta experiencia culinaria combina lo mejor de ambos destinos. Sumérgete en un paraíso de delicias horneadas y saborea cada bocado mientras exploras las vibrantes calles de estas ciudades llenas de vida. Únete a nosotros en este viaje de indulgencia donde el azúcar será el protagonista de tus aventuras. ¡Descubre los secretos de la repostería en Nueva York y Miami y déjate llevar por una experiencia inolvidable!</p>
            </div>
            <div className="col-md-5">
              <img src={tour} className="img-fluid mx-auto" alt="habemuspapafoodtruck" />
            </div>
          </div>
          <hr className="featurette-divider" />
          {/* fin de nuestra ética */}
        </div>
      </div>
  )
}

export default Acerca