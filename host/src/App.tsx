import * as React from "react";

import { AppProviders } from "./appProviders/AppProviders";
import { AppShell } from "./components/appShell/AppShell";
import { ServiceCardsSection } from "./home/serviceCardsSection/ServiceCardsSection";
import { DoctorsLoader } from "./microfrontends/DoctorsLoader";

function App() {
	return (
		<AppProviders>
			<AppShell>
        <ServiceCardsSection />
				<DoctorsLoader />
			</AppShell>
		</AppProviders>
	);
}

export default App;
