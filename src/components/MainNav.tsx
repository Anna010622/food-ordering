import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { CircleUserRound } from 'lucide-react';
import { Button } from './ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Separator } from './ui/separator';

const MainNav = () => {
	const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

	return (
		<>
			{!isAuthenticated ? (
				<Button
					variant="ghost"
					className="font-bold hover:bg-white hover:text-emerald-700"
					onClick={async () => await loginWithRedirect()}
				>
					Log In
				</Button>
			) : (
				<DropdownMenu>
					<DropdownMenuTrigger className="flex gap-2 items-center font-bold hover:text-emerald-700 transition-colors ease-in-out">
						<CircleUserRound className="text-emerald-700" />
						{user?.name}
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem>
							<Link to="/user-profile">User profile</Link>
						</DropdownMenuItem>
						<Separator />
						<DropdownMenuItem>
							<Button
								className="w-full bg-emerald-700 hover:bg-emerald-800"
								onClick={() =>
									logout({ logoutParams: { returnTo: window.location.origin } })
								}
							>
								Log Out
							</Button>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)}
		</>
	);
};

export default MainNav;
