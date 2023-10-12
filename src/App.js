import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
} from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';

const App = () => {
	return (
		<div className="App">
			<h1>React Router</h1>
			<Router>
				<nav>
					<ul>
						<NavLink to="/">Home</NavLink>
						<NavLink to="/products">Products</NavLink>
						<NavLink to="/about">About</NavLink>
					</ul>
				</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="products" element={<Products />} />
					<Route path="products/:id" element={<ProductDetail />} />
					<Route path="about" element={<h2>About Page</h2>} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
