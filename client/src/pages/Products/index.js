import { Grid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import Card from "../../components/Card";

function Products() {
	const { isLoading, error, data } = useQuery({
		queryKey: ["repoData"],
		queryFn: () =>
			fetch("http://localhost:4000/product").then((res) => res.json()),
	});

	if (isLoading) return "Loading...";

	if (error) return "An error has occurred: " + error.message;

	console.log("data", data);

	return (
		<div>
			<Grid templateColumns='repeat(3, 1fr)' gap={4}>
				<Card />
				<Card />
				<Card />
				<Card />
			</Grid>
		</div>
	);
}

export default Products;
