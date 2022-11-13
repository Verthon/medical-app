import type { ServiceCardProps } from "./ServiceCard.types";

export const ServiceCard = ({ path, serviceName }: ServiceCardProps) => {
	return (
		<div>
			<h3>{serviceName}</h3>
		</div>
	);
};
