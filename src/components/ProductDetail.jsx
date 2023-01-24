import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import DATA from '../Data';

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState('Add to Cart');
  const prodId = useParams();
  const proDetail = DATA.filter((val) => val.id === parseInt(prodId.id));

  const product = proDetail[0];
  //   console.log(product);

  const handleCart = (product) => {};
  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center product mx-auto my-auto ">
            <img src={product.img} alt={product.title} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-1 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">€{product.price}</h2>
            <p className="lead">{product.desc}</p>
            <button
              onClick={() => {
                handleCart(product);
                if (cartBtn === 'Add to Cart') {
                  setCartBtn('Remove from Cart');
                } else {
                  setCartBtn('Add to Cart');
                }
              }}
              className="btn btn-outline-primary my-5"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
