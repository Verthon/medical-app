import { Link } from "react-router-dom";

import type { ServiceCardProps } from "./ServiceCard.types";

export const ServiceCard = ({ path, serviceName }: ServiceCardProps) => {
	return (
		<Link to={path}>
			<h3>{serviceName}</h3>
		</Link>
	);
};
