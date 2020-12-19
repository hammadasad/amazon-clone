import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className="Product">
            <div className="Product-description">
                <span className="Product-title">Apple Ipad Air</span>
                <span className="Product-price">$1449</span>
                <span className="Product-rating">
                    <p>🌟</p><p>🌟</p><p>🌟</p>
                </span>
            </div>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-select-201911_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1573825332486"></img>
            <button>Add to Cart</button>
        </div>
    )
}

export default Product
