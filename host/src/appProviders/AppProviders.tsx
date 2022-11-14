import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

import type { AppProvidersProps } from "./AppProviders.types";

export const AppProviders = ({ children }: AppProvidersProps) => {
	return (
		<BrowserRouter>
			<MantineProvider withGlobalStyles withNormalizeCSS>
				{children}
			</MantineProvider>
		</BrowserRouter>
	);
};
