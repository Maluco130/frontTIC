import "./App.css";
import "./index.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h2>Lista de cines</h2>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Barrio</th>
            <th>Cantidad de salas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ejemplo 1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ejemplo 2</td>
            <td>5</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Ejemplo 3</td>
            <td>6</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Ejemplo 4</td>
            <td>8</td>
          </tr>
        </tbody>
      </table>
      <Card />
    </>
  );
}

export default App;
