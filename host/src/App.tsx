import * as React from "react";

import { AppProviders } from "./appProviders/AppProviders";
import { AppShell } from "./components/appShell/AppShell";
import { Routes } from "./routes/Routes";

function App() {
	return (
		<AppProviders>
			<AppShell>
        <Routes />
			</AppShell>
		</AppProviders>
	);
}

export default App;
