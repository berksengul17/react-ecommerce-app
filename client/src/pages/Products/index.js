import React from "react";
import { Box, Grid, Flex, Button } from "@chakra-ui/react";
import { useInfiniteQuery } from "@tanstack/react-query";

import Card from "../../components/Card";

import { fetchProductList } from "../../api";

function Products() {
	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status,
	} = useInfiniteQuery({
		queryKey: ["products"],
		queryFn: fetchProductList,
		getNextPageParam: (lastGroup, allGroups) => {
			const morePagesExist = lastGroup?.length === 12;

			if (!morePagesExist) return;

			return allGroups.length + 1;
		},
	});

	if (status === "loading") return <p>Loading...</p>;
	if (status === "error") return <p>Error: {error.message}</p>;

	console.log("data", data);

	return (
		<div>
			<Grid templateColumns='repeat(3, 1fr)' gap={4}>
				{data.pages.map((group, i) => (
					<React.Fragment key={i}>
						{group.map((item) => (
							<Box w='100%' key={item._id}>
								<Card item={item} />
							</Box>
						))}
					</React.Fragment>
				))}
			</Grid>
			<Flex mt='10' justifyContent='center'>
				<Button
					onClick={() => fetchNextPage()}
					isLoading={isFetchingNextPage}
					disabled={!hasNextPage || isFetchingNextPage}>
					{isFetchingNextPage
						? "Loading more..."
						: hasNextPage
						? "Load More"
						: "Nothing more to load"}
				</Button>
			</Flex>
			<div>
				{isFetching && !isFetchingNextPage ? "Fetching..." : null}
			</div>
		</div>
	);
}

export default Products;
