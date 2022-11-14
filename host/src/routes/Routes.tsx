import { Routes as RouterRoutes, Route, RouterProvider } from "react-router-dom";

import { HomeView } from "../home/Home.view";
import { DoctorsLoader } from "../microfrontends/DoctorsLoader";

export const Routes = () => {
	return (
			<RouterRoutes>
				<Route path="/" element={<HomeView />} />
				<Route path="doctors" element={<DoctorsLoader />} />
			</RouterRoutes>
	);
};
