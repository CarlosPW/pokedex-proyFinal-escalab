import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import logger from "redux-logger";
import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducers";
import "regenerator-runtime/runtime";
import "core-js/stable";

import thunk from "redux-thunk";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../src/components/constants/ErrorBoundary";
import LoadingScreen from "./components/constants/LoadingScreen";
import "./styles/styles.scss";

const AppRouter = lazy(() => import("./routes/AppRouter"));
const HomeScreen = lazy(() => import("./components/HomeScreen"));

const initialState = {
	favoritePokemons: [],
	searchButtonState: false,
	uid: null,
	name: null,
	photo: null,
	headerLoading: true,
	pokedexLoading: true,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(
	<ErrorBoundary FallbackComponent={ErrorFallback}>
		<Suspense fallback={<LoadingScreen />}>
			<Provider store={store}>
				<AppRouter>
					<HomeScreen />
				</AppRouter>
			</Provider>
		</Suspense>
	</ErrorBoundary>,
	document.getElementById("root")
);
