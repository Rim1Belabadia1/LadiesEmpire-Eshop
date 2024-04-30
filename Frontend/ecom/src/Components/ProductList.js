import React from 'react';
import { Link } from "react-router-dom";
import { getUserRole } from "../util/auth";
import "../css/productlist.css"; 
function ProductList({ products }) {
    const userRole = getUserRole();

    return (
        <div className="container">
            <h1 style={{ textDecoration: 'underline'}}>Product List</h1>
            <div className="row">
                {products.map((pro) => (
                    <div key={pro.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img className="card-img-top" src={`data:image/png;base64,${pro.image}`} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{pro.productName}</h5>
                                <p className="card-text">Category: {pro.catName}</p>
                                <p className="card-text">Quantity: {pro.quantity}</p>
                                <p className="card-text">Price: {pro.price}</p>
                                <div className="btn-group" role="group" aria-label="Product Actions">
                                    {userRole === 'Admin' &&
                                        <>
                                            <Link to={`/editproduct/${pro.id}`} className="btn btn-primary">Edit</Link>
                                            <Link to={`/deleteproduct/${pro.id}`} className="btn btn-danger">Delete</Link>
                                        </>
                                    }
                                    <Link to={`/addToCart/${pro.id}`} className="btn btn-warning">Add To Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
