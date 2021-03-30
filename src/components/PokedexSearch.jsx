import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Pokedex from "./Pokedex";

import PulseLoader from "react-spinners/PulseLoader";
import useModal from "../hooks/useModal";

import ModalScreen from "./constants/ModalScreen";

export const PokedexSearch = () => {
	const [value, setvalue] = useState();
	const urlSearch = `https://pokeapi.co/api/v2/pokemon/${value}`;

	const { data, loading } = useFetch(urlSearch);

	const {
		isOpen,
		setIsOpen,
		idToModal,
		setidToModal,
		openModal,
		afterOpenModal,
		closeModal,
	} = useModal(false);

	return (
		<>
			<form className="form_pokedex">
				<input
					type="text"
					className="pokedex__searchInput"
					placeholder="search name or id"
					id="search_input"
				/>
				<button
					className="loginScreen__buttonLogin"
					onClick={(e) => {
						e.preventDefault();
						if (document.querySelector("#search_input").value === "") {
							setvalue(null);
						} else {
							setvalue(document.querySelector("#search_input").value);
							document.querySelector("#search_input").value = "";
						}
					}}
				>
					SEARCH
				</button>
			</form>
			<hr />
			<div className="pokedex_search_body">
				<br />
				<h2>RESULTS: </h2>
			</div>
			{loading ? (
				<div
					style={{
						height: "10%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<PulseLoader color={"#ffe500"} />
				</div>
			) : data === null ? (
				<h3 className="pokedex_search_body">No Pokemon is Found with that name.</h3>
			) : (
				<Pokedex
					id={data.id}
					pokemonName={data.name}
					key={data.id}
					setidToModal={setidToModal}
					openModal={openModal}
				/>
			)}
			<ModalScreen
				isOpen={isOpen}
				afterOpenModal={afterOpenModal}
				closeModal={closeModal}
				setIsOpen={setIsOpen}
				id={idToModal}
			/>
		</>
	);
};
