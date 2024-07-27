import { useAuth0 } from '@auth0/auth0-react';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from './ui/sheet';
import { CircleUserRound, Menu } from 'lucide-react';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const MobileNav = () => {
	const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

	return (
		<Sheet>
			<SheetTrigger>
				<Menu className="text-emerald-700" />
			</SheetTrigger>
			<SheetContent>
				<SheetTitle>
					{isAuthenticated ? (
						<span className="flex gap-2 items-center">
							<CircleUserRound className="text-emerald-700" /> {user?.name}
						</span>
					) : (
						'Welcome to FoodOrdering'
					)}
				</SheetTitle>
				<Separator className="mt-3" />
				<SheetDescription className="mt-4 flex flex-col gap-3">
					{isAuthenticated ? (
						<>
							<Link
								className="font-bold text-black hover:text-emerald-700 transition-colors ease-in-out"
								to="/user-profile"
							>
								User Profile
							</Link>
							<Button
								className="w-full bg-emerald-700 hover:bg-emerald-800"
								onClick={() =>
									logout({ logoutParams: { returnTo: window.location.origin } })
								}
							>
								Log Out
							</Button>
						</>
					) : (
						<Button
							className="min-w-full font-bold bg-emerald-700 hover:bg-emerald-800"
							onClick={async () => await loginWithRedirect()}
						>
							LogIn
						</Button>
					)}
				</SheetDescription>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
