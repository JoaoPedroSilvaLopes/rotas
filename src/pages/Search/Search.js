import { useSearchParams, Link } from "react-router-dom"
import useFetch from "../../hooks/useFetch"

const Search = () => {
  const [searchParams] = useSearchParams()
  
  const url = "http://localhost:3001/products?" + searchParams

  const { data: items, loading, error } = useFetch(url)


  return (
    <>
        <h1>TESTE</h1>
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
    </>
  )
}

export default Search