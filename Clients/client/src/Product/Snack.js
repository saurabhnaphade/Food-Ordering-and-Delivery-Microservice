import './snacks.css'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link,useHistory ,useLocation } from 'react-router-dom';
import { AiFillCodeSandboxCircle } from 'react-icons/ai';


const Snack = () => {

    const [allSnacks, setAllSnacks] = useState([])
    

    const history =useHistory()

    const location =useLocation()
    const menu = location.state.menu
    

    useEffect(() => {
        getSnacksDetails()
    }
        , [])
    const getSnacksDetails = () => {
        const url = 'http://localhost:8300'
        axios.get(url + "/fooditems/"+menu.name).then((response) => {
            console.log(response)
            console.log(response.data)
            console.log(response.data.status)
            const result = response.data
            
            if (result.status === 'success') {
                setAllSnacks(result.data)
                localStorage.setItem("hotel",menu.name)

            }
            else {

                alert('error occured while getting details')

            }
        })
    } 
    

    

    return (
        <div >
            
            <div className="">
                <h2 >Best Snacks in {menu.name}</h2>
                <div className="snacks">
                <button className="btn btn-warning margin" onClick={()=>
                                {history.push('/menu') }} >Back</button>

                    {allSnacks.map((product) => {
                        return (
                        <div className="mystyle">
                            <img className="yourStyle" height="250px" src={'http://localhost:8300' + '/' + product.food_thumbnail}></img>
                            <div className="divNameStyle">
                                <div ><h3>{product.name}</h3></div>
                            </div>
                            <div className="divStyle">
                                <h6 >Price : {product.priceperunit} Rs/-</h6>
                                <h6 >Description : {product.description} </h6>
                                <button className="btn btn-warning margin" onClick={()=>
                                {}} >Update</button>
                                <button className="btn btn-danger margin" onClick={()=>{history.push('/deletefood',{product : product})}} >Delete</button>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>

            )
        </div>
    )
                    
    
}

export default Snack




