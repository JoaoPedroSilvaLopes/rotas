import './Header.css'

import { Icon } from '@iconify/react';

const Header = ( { handleShow, showDefault } ) => {

    return (
        <header className={ showDefault === false ? "header" : "moveLeft" }>
            <Icon className="menuHeader" icon="ant-design:menu-outlined" width="24" height="24" onClick={handleShow}/>
            <Icon icon="fa-solid:mouse" color="white" width="24" height="24" />
        </header>
    )
}

export default Header