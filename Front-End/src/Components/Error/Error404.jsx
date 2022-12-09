import { Link } from "react-router-dom";
import "./Error404.css";

function Error404() {
  return (
    <div className="cont">
      <article className="error404">
        <section className="sorry-cont">
          <h1 className="sorry">SORRY</h1>
        </section>

        <section className="cont-404">
          <h2>4</h2>
          <h2>0</h2>
          <h2>4</h2>
        </section>

        <h3>Pagina No Encontrada</h3>

        <Link to={"/"}>
          <button className="btn-back-error">Volver al Inicio</button>
        </Link>
      </article>
    </div>
  );
}

export default Error404;
