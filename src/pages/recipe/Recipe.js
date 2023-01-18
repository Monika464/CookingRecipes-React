import { useEffect} from "react"
import {Link} from 'react-router-dom'
import { useParams, useHistory} from "react-router-dom"
import {useFetch} from '../../hooks/useFetch'
import './Recipe.css'

export default function Recipe(){

const {id} = useParams()
const url = 'http://localhost:5550/recipes/' + id

console.log("to id",id);

const {data: receipt, isPendig: isPending3, error: error3} = useFetch(url)
//console.log(article)
const history = useHistory()

  useEffect(()=>{
    if(error3) {
     //redirect
     //history.goBack()
     console.log("sorry some error")
        setTimeout(()=>{
            history.push('/')
         },2000)
      }
    }, [error3])

return (
  <div>
    { isPending3 && <div>Loading</div>}
     {error3 && <p className="error">{error3}</p>}
  
    {receipt && (
      <>
         <h2 className="page-title">{receipt.title}</h2>
         <p>Takes {receipt.cookingTime} to cook</p>
         <ul>
         <p>{receipt.ingredients.map(ing =><li key={ing}>{ing}</li> )}</p> 
         </ul>
         <p className="method">{receipt.method}</p>
     </>
    )}
 </div>
)
 }   
   
