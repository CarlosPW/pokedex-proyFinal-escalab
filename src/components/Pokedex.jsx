import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Swal from "sweetalert2";

import { setFavorite, deleteFavorite, favoriteFirebase } from "./../actions";

const Pokedex = (props) => {
	const [favorite, setFavorite] = useState(false);
	let { id, pokemonName, favoritePokemons, uid, openModal, setidToModal } = props;

	const dispatch = useDispatch();

	const handleSetFavorite = () => {
		if (uid !== null) {
			props.setFavorite({ id, pokemonName });
			dispatch(favoriteFirebase());
			setFavorite(true);
		} else {
			Swal.fire({
				title: "Error!",
				text: "Please log in to save your Pokemon",
				icon: "error",
				confirmButtonText: "Cool",
			});
		}
	};

	const handleDeleteFavorite = (itemId) => {
		props.deleteFavorite(itemId);
		if (uid !== null) {
			dispatch(favoriteFirebase());
		}
		setFavorite(false);
	};

	const isFavorite = () => {
		const result = favoritePokemons.filter(
			(favoritePokemon) => favoritePokemon.id === id
		);
		if (result.length) {
			setFavorite(true);
		}
	};

	useEffect(() => {
		isFavorite();
	});

	return (
		<div>
			<div className="pokedex__grid">
				<div
					className="pokedex__name-container"
					onClick={() => {
						setidToModal(id);
						openModal();
					}}
				>
					<div className="pokedex__img">
						<LazyLoadImage
							effect="blur"
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
							alt=""
						/>
					</div>
					<h3 className="pokedex__title">{pokemonName}</h3>
				</div>
				<div className="pokedex__icon">
					{favorite ? (
						<i
							onClick={() => handleDeleteFavorite(id)}
							className="fas fa-star pokedex__icon_selected"
						></i>
					) : (
						<i onClick={handleSetFavorite} className="far fa-star"></i>
					)}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		favoritePokemons: state.favoritePokemons,
		uid: state.uid,
	};
};

const mapDispatchToProps = {
	setFavorite,
	deleteFavorite,
};

Pokedex.propTypes = {
	pokemonName: PropTypes.string,
	favoritePokemons: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
