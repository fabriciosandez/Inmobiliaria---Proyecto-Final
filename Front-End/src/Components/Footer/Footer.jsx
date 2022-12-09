import React from "react";
import "./Footer.css";
import { AiOutlineWhatsApp } from "react-icons/ai";

function Footer() {
  return (
    <div className="footerCont">
      <div className="title">
        <h2>Sucursales</h2>
      </div>
      <div className="contDatos">
        <div className="sucursal">
          <h3>Casa Central</h3>
          <ul>
            <li>Colonia 1577</li>
            <li>Teléfono: 4249 8112</li>
            <li>
              <AiOutlineWhatsApp className="dInline" />
              Ventas: 095 110 110
            </li>
            <li>
              <AiOutlineWhatsApp className="dInline" />
              Administración: 095 019 610
            </li>
            <li>casacentral@puntainmuebles.com</li>
          </ul>
        </div>
        <div className="sucursal">
          <h3>Salinas</h3>
          <ul>
            <li>Av. Julieta Ñandú</li>
            <li>Teléfono: 4376 8360</li>
            <li>
              <AiOutlineWhatsApp className="dInline" />
              Ventas: 098 251 443
            </li>
            <li>
              <AiOutlineWhatsApp className="dInline" />
              Administración: 098 125 987
            </li>
            <li>salinas@puntainmuebles.com</li>
          </ul>
        </div>
        <div className="sucursal">
          <h3>Punta del Este</h3>
          <ul>
            <li>Juan Gorlero 1423</li>
            <li>Teléfono: 4249 8112</li>
            <li>
              <AiOutlineWhatsApp className="dInline" />
              Ventas: 098 789 225
            </li>
            <li>
              <AiOutlineWhatsApp className="dInline" />
              Administración: 099 225 638
            </li>
            <li>puntadeleste@puntainmuebles.com</li>
          </ul>
        </div>
        <div className="sucursal">
          <h3>Piriápolis</h3>
          <ul>
            <li>Jacinto Trapani 1985</li>
            <li>Teléfono: 4432 0514</li>
            <li>
              <AiOutlineWhatsApp className="dInline" />
              Ventas: 098 715 856
            </li>
            <li>
              <AiOutlineWhatsApp className="dInline" />
              Administración: 099 326 554
            </li>
            <li>piriapolis@puntainmuebles.com</li>
          </ul>
        </div>
        <div className="sucursal">
          <h3>Carrasco</h3>
          <ul>
            <li>Mones Roses 2420</li>
            <li>Teléfono: 2623 1125</li>
            <li>
              <AiOutlineWhatsApp className="dInline" />
              Ventas: 099 197 777
            </li>
            <li>
              <AiOutlineWhatsApp className="dInline" />
              Administración: 098 352 424
            </li>
            <li>carrasco@puntainmuebles.com</li>
          </ul>
        </div>
        <div className="sucursal">
          <h3>Punta Gorda</h3>
          <ul>
            <li>General Paz 1428</li>
            <li>Teléfono: 2604 3340</li>
            <li>
              <AiOutlineWhatsApp className="dInline" />
              Ventas: 099 142 118
            </li>
            <li>
              <AiOutlineWhatsApp className="dInline" />
              Administración: 099 025 046
            </li>
            <li>puntagorda@puntainmuebles.com</li>
          </ul>
        </div>
        <div className="sucursal">
          <h3>Lomas de Solymar</h3>
          <ul>
            <li>Av. Giannattasio Km. 26.500</li>
            <li>Teléfono: 4370 3862</li>
            <li>
              <AiOutlineWhatsApp className="dInline" />
              Ventas: 099 142 118
            </li>
            <li>
              <AiOutlineWhatsApp className="dInline" />
              Administración: 099 025 046
            </li>
            <li>solymar@puntainmuebles.com</li>
          </ul>
        </div>
        <div className="sucursal">
          <h3>Parque del Plata</h3>
          <ul>
            <li>Ruta Interbalnearia Km. 49</li>
            <li>Teléfono: 4342 3371</li>
            <li>
              <AiOutlineWhatsApp className="dInline" />
              Ventas: 099 445 665
            </li>
            <li>
              <AiOutlineWhatsApp className="dInline" />
              Administración: 099 177 883
            </li>
            <li>parquedelplata@puntainmuebles.com</li>
          </ul>
        </div>
        <div className="sucursal">
          <h3>Las Piedras</h3>
          <ul>
            <li>Rivera 641</li>
            <li>Teléfono: 2365 6520</li>
            <li>
              <AiOutlineWhatsApp className="dInline" />
              Ventas: 099 867 668
            </li>
            <li>
              <AiOutlineWhatsApp className="dInline" />
              Administración: 099 547 356
            </li>
            <li>laspiedras@puntainmuebles.com</li>
          </ul>
        </div>
        <div className="sucursal">
          <h3>Pinamar</h3>
          <ul>
            <li>Ruta Interbalnearia Km. 36.200</li>
            <li>Teléfono: 4320 4578</li>
            <li>
              <AiOutlineWhatsApp className="dInline" />
              Ventas: 099 126 788
            </li>
            <li>
              <AiOutlineWhatsApp className="dInline" />
              Administración: 099 047 985
            </li>
            <li>pinamar@puntainmuebles.com</li>
          </ul>
        </div>
      </div>
      <div className="contact">
      </div>
    </div>
  );
}

export default Footer;
