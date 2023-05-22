import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Button, Text, Box } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
import { fetchProduct } from "../../api";
import moment from "moment";

function ProductDetail() {
	const { product_id } = useParams();

	const { isLoading, error, data } = useQuery(["product", product_id], () =>
		fetchProduct(product_id)
	);

	if (isLoading) return "Loading...";
	if (error) return "An error has occurred: " + error.message;

	const images = data.photos.map((url) => ({ original: url }));

	return (
		<div>
			<Button colorScheme='pink'>Add to basket</Button>

			<Text as='h2' fontSize='2xl'>
				{data.title}
			</Text>

			<Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>

			<p>{data.description}</p>

			<Box>
				<ImageGallery items={images} />
			</Box>
		</div>
	);
}

export default ProductDetail;
