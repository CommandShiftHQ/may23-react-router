import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
	const products = [
		{
			id: 1,
			name: 'Product 1',
			description: 'Product 1 Description',
		},
		{
			id: 2,
			name: 'Product 2',
			description: 'Product 2 Description',
		},
		{
			id: 3,
			name: 'Product 3',
			description: 'Product 3 Description',
		},
		{
			id: 4,
			name: 'Product 4',
			description: 'Product 4 Description',
		},
		{
			id: 5,
			name: 'Product 5',
			description: 'Product 5 Description',
		},
	];
	return (
		<div>
			<h2>Products Page</h2>
			<p>List Of Products</p>

			{products.map((product) => {
				return (
					<Link to={`/products/${product.id}`} key={product.id}>
						{product.name}
					</Link>
				);
			})}

			{/* <Link to="/products/1">Product 1</Link>
			<Link to="/products/2">Product 2</Link>
			<Link to="/products/3">Product 3</Link>
			<Link to="/products/4">Product 4</Link>
			<Link to="/products/5">Product 5</Link> */}
		</div>
	);
};

export default Products;
