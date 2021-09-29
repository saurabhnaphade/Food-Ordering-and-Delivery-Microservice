import React from 'react'
import HeaderAdmin from '../../Header/HeaderAdmin'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Details from '../../Details/Details'
import { Link } from 'react-router-dom'
import './AdminHome.css'

const AdminHome = () => {

    const [allDetails, setDetails] = useState([])

    useEffect(() => {
        getDetails()
    }
        , [])

    const getDetails = () => {




        const url = 'http://localhost:4000'
        axios.get(url + '/customers/details').then((response) => {

            const result = response.data
            if (result.status === 'success') {
                setDetails(result.data)
                
            }
            else {

                alert('error occured while getting details')

            }
        })

    }

    return (
        <div className="adminstyle">
            <HeaderAdmin />
            <div className="">
                <h2><center>All Customer Details</center></h2>
                <div>
                    <Details items={allDetails}  ></Details>
                </div>
            </div>
        </div>
    )
}

export default AdminHome
