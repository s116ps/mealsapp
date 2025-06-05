import React, {useEffect, useState} from "react"
import axios from "axios"
import './Body.css';

import { bootstrap } from 'bootstrap/dist/css/bootstrap.min.css';

function Body(){
const [items,setitems] = useState([])
useEffect(()=>{
    // axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => {
        console.log(res.data);
        setitems(res.data.categories);
    }).catch(err => {
        console.log(err);
    })
},[])

    const itemlists = items.map((obj) => {
        return<div className="col-ml-4" id="itlists">
                <p style={{fontWeight:'bolder'}}>{obj.idCategory}</p>
                <p className="pname"><h3>{obj.strCategory}</h3></p>
                <img src={obj.strCategoryThumb} id="pic"></img>
                <p className="pdesc" style={{width:'350px'}}>{obj.strCategoryDescription}</p>
                {/* <textarea style={{rows:'6', cols:'80'}}>{obj.strCategoryDescription}</textarea> */}
            </div>
    })

    return(<div>{itemlists}</div>)
    
}
export default Body;