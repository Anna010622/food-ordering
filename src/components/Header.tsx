import { Link } from "react-router-dom"

const Header = () => {
    return(
        <div className="border-b-2 border-b-emerald-700 py-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-3xl font-bold tracking-tight text-emerald-700">
                    FoodOrdering
                </Link>
            </div>
        </div>
    )
}

export default Header