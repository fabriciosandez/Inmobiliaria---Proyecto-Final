import React from "react";
import "./Descripcion.css";
import { ImLocation } from "react-icons/im";
import { MdKingBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { RxRulerSquare } from "react-icons/rx";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProperty } from "../../api/Rule_property";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";

function Descripcion() {
  const [inmuebles, setInmuebles] = useState([]);
  const { id } = useParams();

  const listarInmuebles = async () => {
    await getProperty(id)
      .then((response) => {
        setInmuebles(response);
        console.log(inmuebles);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    listarInmuebles();
  }, []);

  return (
    <div className="contDescripcion">
      <Header />
      <div className="contDescripcionMain">
        <div className="carrusel">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-flex img "
                src="/Images/casa2.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block img"
                src="/Images/casa3.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block img"
                src="/Images/casa4.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="dataCont">
          <div className="nombre">
            <h3 className="name">{inmuebles?.tipo}</h3>
            <p className="ubicacion">
              <ImLocation className="dInline location" />
              {inmuebles?.localidad}
            </p>
            <span>
              {inmuebles?.operacion}
              <strong> {inmuebles?.precio}</strong>
            </span>
          </div>
          <div className="info">
            <div className="circuloCont">
              <div className="circulo">
                <MdKingBed className="icon" />
              </div>
              <div className="dorm">
                <span>{inmuebles?.dormitorios}</span>
                <span> Dorms</span>
              </div>
            </div>
            <div className="circuloCont">
              <div className="circulo">
                <FaBath className="icon" />
              </div>
              <div className="dorm">
                <span>{inmuebles?.sanitarios}</span>
                <span> Baños</span>
              </div>
            </div>
            <div className="circuloCont">
              <div className="circulo">
                <RxRulerSquare className="icon" />
              </div>
              <div className="dorm">
                <span>Sup.</span>
                <span>{inmuebles?.metrosCuadrados} m2</span>
              </div>
            </div>
          </div>
          <div className="estadoCont">
            <div className="estado">{inmuebles?.operacion}</div>
            <span>ID de la propiedad: #{inmuebles?.id}</span>
          </div>
        </div>
        <div className="descripcion">
          <div className="descripcionleft">
            <h2> Descripcion</h2>
          </div>
          <div className="descripcionrigth">
            <p>
              Departamento en venta en el Proyecto Oceana, Puerto Madero. <br />
              <br />
              Un dormitorio en suite. Vista a la plaza central. Toilette, cocina
              abierta al living/ comedor. <br />
              Incluye cochera y baulera en el 1er. Subsuelo. Orientación Norte.
              <br />
              Amenities: <br />
              -Pileta climatizada cubierta. <br />
              -Gimnasio con aparatos de
              <br />
              última generación. <br />
              -Sanitarios, Vestuarios y Duchas. <br />
              -Salón de Usos
              <br />
              Múltiples con cocina independiente y baños. <br />
              -Laundry. <br />
              <br />
              El proyecto está pensado por Alan Faena y Eduardo Costantini en
              conjunto con el arquitecto inglés Brandon Haw, quien trabajó con
              Norman Foster en varios proyectos tanto en Inglaterra como en
              distintas partes del mundo. Se desarrolla sobre el último terreno
              disponible en el dique 2 de Puerto Madero, frente al Hotel Faena.
              Oceana Puerto Madero cuenta con dos torres paralelas entre sí de 8
              pisos cada una y perpendiculares al dique. En el centro de ambos
              edificios hay una plaza que será de espacio exclusivo para los
              residentes de Oceana. Hay tipologías de departamentos que cuentan
              con vistas a las plazas, otras con vistas a los laterales (a
              Martha Salotti o Petrona Eyle), otras con vistas directas al dique
              y otras con vistas a Juana Manso.
            </p>
          </div>
        </div>
        <div className="mapacont"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Descripcion;
