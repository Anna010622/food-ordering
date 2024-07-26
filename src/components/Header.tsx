import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import MainNav from './MainNav';

const Header = () => {
	return (
		<div className="py-6 border-b-2 border-b-emerald-700 ">
			<div className="container flex justify-between items-center">
				<Link
					to="/"
					className="text-3xl font-bold tracking-tight text-emerald-700 hover:text-emerald-800 transition-colors"
				>
					FoodOrdering
				</Link>
				<div className="md:hidden flex items-center">
					<MobileNav />
				</div>
				<div className="hidden md:block">
					<MainNav />
				</div>
			</div>
		</div>
	);
};

export default Header;
