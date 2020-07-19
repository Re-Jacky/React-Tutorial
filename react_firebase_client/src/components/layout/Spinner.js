import React from 'react'
import loading from './loading.gif'

export default function Spinner() {
    return (
        <div>
            <img src={loading} alt="Loading..." style={{ width: '50px', margin: 'auto',display: 'block'}}/>
        </div>
    )
}
