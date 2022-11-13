import { MantineProvider } from '@mantine/core';

import type { AppProvidersProps } from "./AppProviders.types";

export const AppProviders = ({ children }: AppProvidersProps) => {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			{ children }
		</MantineProvider>
	);
};
