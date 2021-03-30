const reducer = (state, action) => {
	switch (action.type) {
		case "SET_FAVORITE":
			return {
				...state,
				favoritePokemons: [...state.favoritePokemons, action.payload],
			};
		case "DELETE_FAVORITE":
			return {
				...state,
				favoritePokemons: state.favoritePokemons.filter(
					(items) => items.id !== action.payload
				),
			};

		case "SEARCH_BUTTON_STATE":
			return {
				...state,
				searchButtonState: action.payload,
			};

		case "LOGIN_STATE":
			return {
				...state,
				uid: action.payload.uid,
				name: action.payload.displayName,
				photo: action.payload.photoURL,
			};

		case "LOGOUT":
			return {
				...state,
				uid: null,
				name: null,
				photo: null,
			};

		case "HEADER_LOADING":
			return {
				...state,
				headerLoading: action.payload,
			};

		case "POKEDEX_LOADING":
			return {
				...state,
				pokedexLoading: action.payload,
			};

		case "CLEAR_POKEMONS":
			return {
				...state,
				favoritePokemons: [],
			};

		default:
			return {
				...state,
			};
	}
};

export default reducer;
