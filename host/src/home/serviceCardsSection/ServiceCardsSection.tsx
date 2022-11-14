import { Grid } from "@mantine/core";

import { ServiceCard } from "../../components/serviceCard/ServiceCard";

export const ServiceCardsSection = () => {
	return (
		<Grid>
			<Grid.Col span={4}>
				<ServiceCard path="/doctors" serviceName="Find Doctors" />
			</Grid.Col>
		</Grid>
	);
};
