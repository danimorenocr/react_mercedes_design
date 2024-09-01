import "./App.css";
import miLogo from "./assets/img/logo.jpg";
import amg from "./assets/img/car.png";

function App() {
  return (
    <main>
      <section>
        <div className="logo">
          <img
            src={miLogo}
            alt="logo"
            className="imagen-logo"
            style={{ height: "100px" }}
          />
        </div>
        <div className="rectangulo-diagonal"></div>
        <div>
          <h1 className="titulo">MERCEDES</h1>
          <h1 className="titulo benz">BENZ</h1>
        </div>
        <div>
          <img
            src={amg}
            alt="amg car"
            className="amg-car"
            style={{ height: "450px" }}
          />
          <h3 className="marca">AMG-SL</h3>
        </div>
        <div className="button-container">
          <button className="custom-button">VER AUTOS</button>
        </div>
      </section>
    </main>
  );
}

export default App;