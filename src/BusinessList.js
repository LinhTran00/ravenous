import React from 'react'
import Business from './Business'

function BusinessList ({ businesses }) {
    return (
        <div>
            {businesses.map((business, index) => (
                <Business key={index} {...business}/>
            ))}
        </div>
    )
}

export default BusinessList