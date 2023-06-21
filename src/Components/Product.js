import React from 'react'

function Product(props) {
  return (
    <>
    <div className="dabbe-container">
        <div className="dabbe-wishlist" >
            <img src="	https://static1.hkrtcdn.com/hknext/static/media/common/variant/wishlist/heart.svg" alt="heart" />
            </div>
        <div className="dabbe-image">
            <div className="dabbe-image-in">
            <img src={props.url} alt="muscleblaze" />
            </div>
        </div>
        <div className="dabbe-neeche">
            <div className="neeche-up">
                <span className='variant-rating'>
                    <div className="flexing-ratings">
                        <div className="flexing-normal-div">
                            <div className="flexing-rating-child">
                                {props.star}
                                <img src={props.starphoto} alt="" />
                            </div>
                        </div>
                        <div className="flexing-reviews">{props.review}</div>
                        <span className="vegnonveg">
                            <div className="vegnonveg-icon">
                            <div className="dot-vegnonveg">&nbsp;</div>
                            </div>
                        </span>
                    </div>
                </span>
                <div className='variant-name'>{props.name}</div>
            </div>
            <div className="neeche-down">
                    <div className="og-member">
                        <span className="pricing">
                         {props.price}
                        </span>
                        <span className="original-pricing">
                        {props.ogprice}
                        </span>
                        <div className="discount">
                            <span className="discount-price">
                                {props.discount}
                            </span>
                            <span className="offer">
                                {props.offer}
                            </span>
                        </div>
                    </div>
                    <div className="premium">
                        <img src="https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg" alt="" />
                        <span className="premium-price">{props.premium}</span>
                        <span className="premium-member">for Premium Member</span>
                    </div>
                    <div className="cart">
                        <button className="btn-cart">
                            <img src="https://static1.hkrtcdn.com/hknext/static/media/common/cartNew.svg" alt="" />
                            <span className="add-cart">Add to Cart</span>
                            {/* <img src="	https://static1.hkrtcdn.com/hknext/static/media/common/cart-white-new.svg" alt="" /> */}
                        </button>
                    </div>
             </div>
        </div>
    </div>
    </>
  )
}

export default Product
