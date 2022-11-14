import { Container, Footer, Navbar, Text } from "@mantine/core";
import { Link } from "react-router-dom";

import type { AppShellProps } from "./AppShell.types";

export const AppShell = ({ children }: AppShellProps) => {
	return (
		<>
			<Navbar p="md" height={100}>
				<Link to="/"><Text>Mighty Medical Corp</Text></Link>
			</Navbar>
			<Container>{children}</Container>
			<Footer p="md" height={50}>Some Footer content here</Footer>
		</>
	);
};
