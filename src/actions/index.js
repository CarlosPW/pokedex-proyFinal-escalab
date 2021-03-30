import { db, firebase, googleAuthProvider } from "../firebase/firebase-config";

export const setFavorite = (payload) => ({
	type: "SET_FAVORITE",
	payload,
});

export const deleteFavorite = (payload) => ({
	type: "DELETE_FAVORITE",
	payload,
});

export const searchButton = (payload) => ({
	type: "SEARCH_BUTTON_STATE",
	payload,
});

export const login = (uid, displayName, photoURL) => ({
	type: "LOGIN_STATE",
	payload: {
		uid,
		displayName,
		photoURL,
	},
});

export const startGoogleLogin = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName, user.photoURL));
			});
	};
};

export const startLogout = () => {
	return async (dispatch) => {
		await firebase.auth().signOut();

		dispatch(logout());
	};
};

export const logout = () => ({
	type: "LOGOUT",
});

export const setHeaderLoading = (payload) => ({
	type: "HEADER_LOADING",
	payload,
});

export const pokedexLoading = (payload) => ({
	type: "POKEDEX_LOADING",
	payload,
});

export const favoriteFirebase = () => {
	return async (dispatch, getState) => {
		const uid = getState().uid;

		let favorite = { ...getState().favoritePokemons };

		let docRef = await db.collection(`${uid}`).doc("favorites").set(favorite);
		return docRef;
	};
};

export const getFavoriteFirebase = async (uid, dispatch) => {
	const snapRef = await db.collection(`${uid}`).doc("favorites").get();

	const array = Object.values(snapRef.data());
	// console.log(array);
	return array;
};

export const clearPokemonsLogout = (payload) => ({
	type: "CLEAR_POKEMONS",
	payload,
});
