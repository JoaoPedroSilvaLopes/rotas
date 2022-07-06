import './Products.css'

import { Link, useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const Products = () => {

  const { id } = useParams();
  const url = 'http://localhost:3000/products/' + id
  const { data: product, loading, error } = useFetch(url)

  return (
    <>
      {error && <p>Ocorreu um erro</p>}
      {loading && <p>Carregando...</p>}
      {!loading && product && <div>
        <h1>Detalhe do produto</h1>
        <p>R$ {Number(product.price).toFixed(2)}</p>
        <p>Nome do produto: {product.name}</p>
        <p>ID do produto: {product.id}</p>
        <Link to={`/products/${product.id}/info`}>Mais Informações</Link>
      </div>}
    </>
  )
}

export default Products