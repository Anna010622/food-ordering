import hero from '../assets/hero.jpg';

const Hero = () => {
	return (
		<div className="h-[300px] ">
			<img
				className="object-cover object-center w-full h-full"
				src={hero}
				alt="food"
			/>
		</div>
	);
};

export default Hero;
