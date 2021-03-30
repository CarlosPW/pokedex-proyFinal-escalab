import React, { useState } from "react";
import Header from "./constants/Header";

import { connect } from "react-redux";
import { setFavorite, deleteFavorite } from "./../actions";
import Pokedex from "./Pokedex";

import ModalScreen from "./constants/ModalScreen";

const FavoritesScreen = (props) => {
	const { favoritePokemons } = props;

	const [isOpen, setIsOpen] = useState(false);
	const [idToModal, setidToModal] = useState();

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div className="favorites__container">
			<Header />

			<div className="favorites__listcontainer">
				{!favoritePokemons.length
					? null
					: favoritePokemons.map((poke) => {
							return (
								<Pokedex
									id={poke.id}
									pokemonName={poke.pokemonName}
									key={poke.id}
									openModal={openModal}
									setidToModal={setidToModal}
									onClick={() => {
										setidToModal(poke.id);
									}}
								/>
							);
					  })}
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

const mapStateToProps = (state) => {
	return {
		favoritePokemons: state.favoritePokemons,
	};
};

const mapDispatchToProps = {
	setFavorite,
	deleteFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
