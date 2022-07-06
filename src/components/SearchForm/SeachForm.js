import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SeachForm = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()

    navigate("/search?q=" + query)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setQuery(e.target.value)}/>
      <input type="submit" value="buscar"/>
    </form>
  )
}

export default SeachForm