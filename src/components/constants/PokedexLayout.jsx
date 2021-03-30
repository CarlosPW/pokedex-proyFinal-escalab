import React from "react";

import PokedexIcon from "./../../assets/img/img_home/pokedex_icon.png";
import PokedexLed from "./../../assets/img/img_home/pokedex_led.png";
import PokedexFooterIcon from "./../../assets/img/img_home/pokedex_footer_icon.png";

const PokedexLayout = ({
	children,
	data,
	loading,
	setUrl,
	handleSetButtonState,
	state,
}) => {
	return (
		<div className="homeScreen__pokedex">
			<div className="pokedex_header">
				<div className="pokedex__icon">
					<img src={PokedexIcon} alt="icono Pokedex" />
				</div>
				<h1>Pokedex</h1>
				<div className="pokedex__led">
					<img src={PokedexLed} alt="" />
				</div>
				<button
					className={state ? "homeScreen_searchButton_active" : "homeScreen_searchButton"}
					onClick={() => {
						// console.log(state);
						handleSetButtonState(!state);
					}}
				>
					SEARCH
				</button>
			</div>
			<div className="pokedex_body">{children}</div>
			{state ? (
				<div className="pokedex_footer">
					<i
						className="far fa-times-circle"
						onClick={() => {
							// console.log(state);
							handleSetButtonState(false);
						}}
					></i>
				</div>
			) : (
				<div className="pokedex_footer">
					{loading ? null : data.previous === null ? (
						<div>&nbsp;</div>
					) : (
						<button
							className="pokedex_footer_icon"
							onClick={(e) => {
								e.preventDefault();
								window.localStorage.setItem("url", data.previous);
								setUrl(data.previous);
							}}
						>
							<i className="fas fa-chevron-left"></i>
						</button>
					)}
					<div
						className="pokedex_footer_icon"
						onClick={(e) => {
							e.preventDefault();
							window.localStorage.setItem("url", "https://pokeapi.co/api/v2/pokemon/");
							setUrl("https://pokeapi.co/api/v2/pokemon/");
						}}
					>
						<img src={PokedexFooterIcon} alt="icono Pokedex" />
					</div>
					{loading ? null : data.next === null ? (
						<div>&nbsp;</div>
					) : (
						<button
							className="pokedex_footer_icon"
							onClick={(e) => {
								e.preventDefault();
								window.localStorage.setItem("url", data.next);
								setUrl(data.next);
							}}
						>
							<i className="fas fa-chevron-right"></i>
						</button>
					)}
				</div>
			)}
		</div>
	);
};

export default PokedexLayout;
