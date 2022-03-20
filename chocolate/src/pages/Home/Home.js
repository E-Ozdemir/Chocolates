import React from 'react'
import Product from '../../components/Products/Product'
import { chocolateData } from '../../helper/chocolate-data'
import './Home.css'

function Home() {
    return (
        <div className='containerr'>
            <h3>
                Products
            </h3>
            <div className='main-container'>
                {chocolateData.data.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Home

