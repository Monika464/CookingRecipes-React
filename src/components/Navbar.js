import {Link} from 'react-router-dom'
import {useTheme} from '../hooks/useTheme'
import {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'

//styles
import './Navbar.css'

//components
import Searchbar from './Searchbar'

export default function Navbar(){
const{color}= useContext(ThemeContext)


 return (
 <div className="navbar" style={{ background: color}}>
   <nav>
  <Link to="/" className="brand">
     <h1>Cooking ninja</h1>
 </Link>
 <Searchbar/>
 <Link to="/create">
     <h1>Create recipe</h1>
 </Link>
 
   </nav>
 </div>
 
 )

}
