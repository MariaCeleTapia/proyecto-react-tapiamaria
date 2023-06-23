import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => { 
    return (
        <nav>
            <div>
                <button class="button is-primary">Inicio</button>
                <button class="button is-primary">Productos</button>
                <button class="button is-primary">Como Comprar</button>
                <button class="button is-primary">Contacto</button>
                <button class="button is-primary">Ingresar</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar