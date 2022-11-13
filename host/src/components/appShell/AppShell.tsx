import { Container, Footer, Navbar, Text } from "@mantine/core";

import type { AppShellProps } from "./AppShell.types";

export const AppShell = ({ children }: AppShellProps) => {
	return (
		<>
			<Navbar p="md" height={100}>
				<Text>Mighty Medical Corp</Text>
			</Navbar>
			<Container>{children}</Container>
			<Footer p="md" height={50}>Some Footer content here</Footer>
		</>
	);
};
