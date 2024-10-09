import { useNavigate } from "react-router-dom";
//import "../styles/Home.css";

function Home() {
  const navigate = useNavigate(); // Hook para navegación programática

  const handleLogin = () => {
    navigate("/users"); // Navega a la ruta '/users'
  };

  return (
    <>
      <head> </head>
      <body>
        <h2>Lista de cines</h2>
        <button onClick={handleLogin}>Login</button>
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
              <td>Cinepolis</td>
              <td>Av. Insurgentes Sur 123</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Cinemex</td>
              <td>Av. Revolución 456</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </body>
    </>
  );
}

export default Home;
