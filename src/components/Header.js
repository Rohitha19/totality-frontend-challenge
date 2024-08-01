import './styles.css'
import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
const Header=()=>(
    <div className='header-container'>
        <div>
        <FaHome size="xs" className='cart-icon' />
        </div>
        <div>
            <FaCartShopping size="xs" className='cart-icon'/>
        </div>
        
    </div>
)

export default Header