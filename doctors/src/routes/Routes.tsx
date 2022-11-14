import { Routes as RouterRoutes, Route } from "react-router-dom";

import { HomeView } from "../home/Home.view";
import { DoctorDetailsView } from "../doctorDetails/DoctorDetails.view";

export const Routes = () => {
	return (
			<RouterRoutes>
				<Route path="/" element={<HomeView />} />
				<Route path="doctors" element={<DoctorDetailsView />} />
			</RouterRoutes>
	);
};
