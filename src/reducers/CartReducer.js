// Create a initial state
const initialData = [];

// Create reducer function and write all logic
const cartReducer = (cartData, action) => {
	switch (action.type) {
		case "add_to_cart":
			return [...cartData, action.payload];

		case "remove_from_cart":
			return cartData.filter((item) => item.id !== action.payload.id);
		default: {
			throw new Error(`Invalid action ${action.type}`);
		}
	}
};

export { initialData };
export default cartReducer;
