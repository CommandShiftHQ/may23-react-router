import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
	const { id } = useParams();
	const location = useLocation();
	const navigate = useNavigate();

	const clickHandler = () => {
		console.log('Going Back To Products');
		navigate('/products');
	};

	return (
		<div>
			<h2>Product Detail Page</h2>
			<h3>Product Number {id}</h3>
			<p>Your location is {location.pathname}</p>
			<button onClick={clickHandler}>Go Back To Products</button>
		</div>
	);
};

export default ProductDetail;
