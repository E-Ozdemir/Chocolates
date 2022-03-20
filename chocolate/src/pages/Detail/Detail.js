import React from 'react'
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { useHistory } from 'react-router-dom';
import './Detail.css'

function Detail() {
    const location = useLocation();
    const history = useHistory();   
    return (
        <div className='detail-container'>
            <h3>
                {location.state.brand} {location.state.name}
            </h3>
            <div className='shop-container'>
                {location.state.prices.map(item => (
                    <div className='shops'>
                        <div>
                            <span>Shop Name</span>
                            : {item.shop}
                        </div>
                        <div>
                            <span>Price</span>
                            : {item.price} €
                        </div>
                        <div>
                            <span>Amount</span>: {item.amount} {item.unit == 'g'? 'gr': 'kg'}
                        </div>
                        <div>
                            <a href={item.link} target="_blank">Link to Shop</a>
                        </div>
                    </div>
                ))}
            </div>
            <Button variant="contained" startIcon={<HomeRoundedIcon />} size="small" onClick={() => history.push('/')} sx={{ mb: 1, background:'success.main' }}>
                Home Page
            </Button>
        </div>
    )
}

export default Detail