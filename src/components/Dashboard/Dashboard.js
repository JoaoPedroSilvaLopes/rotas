// BIBLIOTECAS
import { Outlet } from 'react-router-dom'

// COMPONENTES
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Home from '../../pages/Home/Home'


const Dashboard = ( {handleShow, showDefault, settarState} ) => {
    return (
        <>
            <Header handleShow={handleShow} show={showDefault}/>
            <Navbar showDefault={showDefault} settarState={settarState}/>
            <Outlet />
        </>
    )
}

export default Dashboard