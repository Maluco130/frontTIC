import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
    </>
  )
}

export default App
