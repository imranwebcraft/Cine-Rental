// Create a initial state
const initialState = {
	cartData: [],
};

// Create reducer function and write all logic
const cartReducer = (state, action) => {
	switch (action.type) {
		case "add_to_cart":
			return {
				cartData: [...state.cartData, action.payload],
			};

		case "remove_from_cart":
			return {
				...state,
				cartData: state.cartData.filter(
					(item) => item.id !== action.payload.id
				),
			};
		default: {
			throw new Error(`Invalid action ${action.type}`);
		}
	}
};

export { initialState };
export default cartReducer;
