import React from 'react'
import ProductBox from './ProductBox'
import image1 from '../images/s1.png';
import image2 from '../images/s2.png';

function Products() {
    return (
        <div id='products'>
            <h1>
                CHOOSE & ENJOY
            </h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem natus
                 facilis est dolores asperiores </p>
            <div className='a-container'>
                <ProductBox image={image2} title="Lurger Burger"/>
            <ProductBox image={image2} title="Le Pigeon Burger"/>
            <ProductBox image={image2} title="Lurger Burger"/>
            </div>
            
        </div>
    )
}

export default Products
