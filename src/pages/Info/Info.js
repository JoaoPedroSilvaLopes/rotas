import { useParams } from "react-router-dom"

const Info = () => {
  const { modelo } = useParams()

  return (
    <div>Mais informações sobre o produto: {modelo}</div>
  )
}

export default Info