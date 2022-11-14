import React from "react";
import ReactDOM from "react-dom";
import { HomeView } from "./home/Home.view";

import "./index.scss";
import { AppProviders } from "./providers/appProviders/AppProviders";
import { Routes } from "./routes/Routes";

const App = () => (
	<AppProviders>
		<HomeView />
	</AppProviders>
);

export default App;
