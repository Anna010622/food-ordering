import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from './ui/sheet';
import { Menu } from 'lucide-react';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

const MobileNav = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu className="text-emerald-700" />
			</SheetTrigger>
			<SheetContent>
				<SheetTitle>Welcome to FoodOrdering</SheetTitle>
				<Separator className="mt-3" />
				<SheetDescription className="mt-4">
					<Button className="min-w-full font-bold bg-emerald-700 hover:bg-emerald-800">
						LogIn
					</Button>
				</SheetDescription>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
