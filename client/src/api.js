export const fetchProductList = async ({ pageParam = 0 }) => {
	const data = await fetch(
		`http://localhost:4000/product?page=${pageParam}`
	).then((res) => res.json());

	return data;
};

export const fetchProduct = async (id) => {
	const data = await fetch(`http://localhost:4000/product/${id}`).then(
		(res) => res.json()
	);

	return data;
};
