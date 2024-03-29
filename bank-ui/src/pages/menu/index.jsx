import './Menu.css'
import { Header } from "../../components/Header"
import { Services } from "../../components/Services"
import { Navigation } from '../../components/Navigation'
import { Cards } from "../../components/Cards"

const Menu = () => {
    return(
        <div className="app">
            <Header/>
            <div className="app-body">
                <div className="app-body-navigation">
                   <Navigation/>
                    <footer className='footer'>
                        <h1>Auth Bank <small>©</small></h1>
                        <div>
                            Leonardo & Erick © <br/>
                            All Rights Reserved 2024
                        </div>
                    </footer>
                </div>
                <Services/>
                <Cards/>
            </div>
        </div>
    )
}
export default Menu