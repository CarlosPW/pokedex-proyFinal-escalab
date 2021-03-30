import React, { useState } from "react";
import PropTypes from "prop-types";
import PokemonImg from "./../assets/img/img_home/pokemon_home.png";

import { useFetch } from "../hooks/useFetch";

import Header from "./constants/Header";
import Pokedex from "./Pokedex";
import PokedexLayout from "./constants/PokedexLayout";

import { searchButton } from "./../actions";
import { useSelector, useDispatch } from "react-redux";
import { PokedexSearch } from "./PokedexSearch";

import PulseLoader from "react-spinners/PulseLoader";
import ErrorFallback from "./constants/ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";

import ModalScreen from "./constants/ModalScreen";
import useModal from "../hooks/useModal";

const HomeScreen = () => {
	const searchButtonState = useSelector((state) => state.searchButtonState);
	const pokedexLoading = useSelector((state) => state.pokedexLoading);

	const dispatch = useDispatch();

	const handleSetButtonState = (state) => {
		dispatch(searchButton(state));
	};

	let initialState;
	if (window.localStorage.getItem("url") === null) {
		initialState = "https://pokeapi.co/api/v2/pokemon/";
	} else {
		initialState = window.localStorage.getItem("url");
	}

	const [url, setUrl] = useState(initialState);
	const { data, loading } = useFetch(url);

	const {
		isOpen,
		setIsOpen,
		idToModal,
		setidToModal,
		openModal,
		afterOpenModal,
		closeModal,
	} = useModal(false);
	// const [idToModal, setidToModal] = useState();

	return (
		<div className="homeScreen">
			<div className="homeScreen__container">
				<Header />
				<div className="homeScreen__box">
					<div className="homeScreen__left">
						<img src={PokemonImg} alt="" />
					</div>
					<ErrorBoundary FallbackComponent={ErrorFallback}>
						<PokedexLayout
							data={data}
							loading={loading}
							setUrl={setUrl}
							handleSetButtonState={handleSetButtonState}
							state={searchButtonState}
						>
							{loading ? (
								<div
									style={{
										height: "100%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<PulseLoader color={"#ffe500"} />
								</div>
							) : pokedexLoading ? (
								<div
									style={{
										height: "100%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<PulseLoader color={"#ffe500"} />
								</div>
							) : searchButtonState ? (
								<PokedexSearch />
							) : (
								data.results.map((poke) => {
									return (
										<Pokedex
											id={poke.url.split("/").reverse()[1]}
											pokemonName={poke.name}
											key={poke.url.split("/").reverse()[1]}
											openModal={openModal}
											setidToModal={setidToModal}
											onClick={() => {
												setidToModal(poke.url.split("/").reverse()[1]);
											}}
										/>
									);
								})
							)}
						</PokedexLayout>
					</ErrorBoundary>
				</div>
			</div>

			<ModalScreen
				isOpen={isOpen}
				afterOpenModal={afterOpenModal}
				closeModal={closeModal}
				setIsOpen={setIsOpen}
				id={idToModal}
			/>
		</div>
	);
};

HomeScreen.propTypes = {
	data: PropTypes.object,
	loading: PropTypes.bool,
};

export default HomeScreen;
