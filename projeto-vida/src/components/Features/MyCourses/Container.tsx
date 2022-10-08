import { Link, Outlet } from 'react-router-dom'

export default function Container() {

    return (
        <>
            <div>
                
                <Link to="caixinha-frase">Caixinha de Frase</Link> 
            </div>
            <div>
                <Link to="teste-perfil">Teste de Perfil</Link>
            </div>
            <div>
                <Link to="calendario"> Calendario </Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    )
}

