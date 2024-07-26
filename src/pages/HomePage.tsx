import Hero from '@/components/Hero';

const HomePage = () => {
	return (
		<>
			<Hero />
			<div className="container flex flex-col gap-12">
				<div className="flex flex-col gap-5 -mt-16 py-8 rounded-lg shadow-md text-center bg-white">
					<h1 className="text-5xl font-bold tracking-tight text-emerald-700">
						Tuck into a takeaway today
					</h1>
					<p className="text-xl">Food is just a click away!</p>
				</div>
			</div>
		</>
	);
};

export default HomePage;
