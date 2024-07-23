import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";


function App() {

	return (
		<Routes>
			<Route path="/" element={<Layout><h1>Home page</h1></Layout>}></Route>
			<Route path="/user-profile" element={<h1>User profile</h1>}></Route>
			<Route path="*" element={<Navigate to="/" />}></Route>
		</Routes>
	);
}

export default App;
