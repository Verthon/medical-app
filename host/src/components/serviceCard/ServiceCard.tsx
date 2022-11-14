import { Card, Image, Group, Text } from "@mantine/core";
import { Link } from "react-router-dom";

import type { ServiceCardProps } from "./ServiceCard.types";

export const ServiceCard = ({ path, serviceName }: ServiceCardProps) => {
	return (
		<Link to={path}>
			<Card shadow="sm" p="lg" radius="md" withBorder>
				<Card.Section>
					<Image
						src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
						height={160}
						alt="Norway"
					/>
				</Card.Section>

				<Group position="apart" mt="md" mb="xs">
					<Text weight={500}>{serviceName}</Text>
				</Group>

				<Text size="sm" color="dimmed">
					Contrary to popular belief, Lorem Ipsum is not simply random text. It
					has roots in a piece of it over 2000 years old.
				</Text>
			</Card>
		</Link>
	);
};
