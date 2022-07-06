import { Link } from "react-router-dom"
import useFetch from "../../hooks/useFetch"

import './Home.css'

const Home = () => {

  const url = 'http://localhost:3000/products'

  const { data: items, loading, error } = useFetch(url)

  return (
    <div> 
      {error && <p>{error}</p>}
      <ul className="products">
        {items && items.map(item => (
          <li key={item.id}>
            <div className="dadosItem">
              <h2>{item.name.toUpperCase()}</h2>
              <p>R$: {Number(item.price).toFixed(2)}</p>
            </div>
            <Link to={`/products/${item.id}`}>DETALHES</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home