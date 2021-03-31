import React, { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { firebase } from "../firebase/firebase-config";
import {
	getFavoriteFirebase,
	login,
	pokedexLoading,
	setFavorite,
	setHeaderLoading,
} from "../actions";
import NotFound404 from "../components/constants/NotFound404";
import FavoritesScreen from "../components/FavoritesScreen";

// import HomeScreen from "../components/HomeScreen";
// import LoginScreen from "../components/LoginScreen";

const HomeScreen = lazy(() => import("../components/HomeScreen"));
const LoginScreen = lazy(() => import("../components/LoginScreen"));

export default function AppRouter() {
	const dispatch = useDispatch();

	useEffect(() => {
		firebase.auth().onAuthStateChanged(async (user) => {
			// console.log(user);
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName, user.photoURL));
				const fav = await getFavoriteFirebase(user.uid);
				if (fav.length > 0) {
					fav.forEach((item) => dispatch(setFavorite(item)));
				}
			}

			dispatch(pokedexLoading(false));
			dispatch(setHeaderLoading(false));
		});
	}, [dispatch]);

	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/login">
						<LoginScreen />
					</Route>
					<Route exact path="/favorites">
						<FavoritesScreen />
					</Route>
					<Route exact path="/">
						<HomeScreen />
					</Route>

					<Route component={NotFound404} />
				</Switch>
			</div>
		</Router>
	);
}
