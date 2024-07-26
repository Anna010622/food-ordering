import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="bg-emerald-700 py-10">
			<div className="container flex flex-col md:flex-row justify-between items-center">
				<Link
					to="/"
					className="text-3xl font-bold tracking-tight text-white hover:text-slate-200 transition-colors"
				>
					FoodOrdering
				</Link>
				<div className="flex gap-4 text-white font-bold tracking-tight">
					<span>Privacy Policy</span>
					<span>Terms of Service</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
