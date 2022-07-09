// BIBLIOTECAS
import { Outlet } from 'react-router-dom'

// COMPONENTES
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'

const Dashboard = ( {handleShow, showDefault, reference} ) => {
    return (
        <>
            <Header handleShow={handleShow} showDefault={showDefault}/>
            <Navbar reference={reference} showDefault={showDefault}/>
            <Outlet />
        </>
    )
}

export default Dashboard