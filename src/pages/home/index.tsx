
import Header from '../../components/organisms/Header'
import Products from '../../components/organisms/Products'
import '../../components/templates/default.scss'

const HomePage = () => {
    return <div  >
        <Header />
        <div className="layout">
        <Products />
        </div>
    </div>
}

export default HomePage