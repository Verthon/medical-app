import { Routes as RouterRoutes, Route } from "react-router-dom";

import { HomeView } from "../home/Home.view";
import { DiagnosticsLoader } from "../microfrontends/DiagnosticsLoader";
import { DoctorsLoader } from "../microfrontends/DoctorsLoader";

export const Routes = () => {
	return (
			<RouterRoutes>
				<Route path="/" element={<HomeView />} />
				<Route path="/doctors" element={<DoctorsLoader />} />
				<Route path="/diagnostics" element={<DiagnosticsLoader />} />
			</RouterRoutes>
	);
};
