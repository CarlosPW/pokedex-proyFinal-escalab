import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearPokemonsLogout, startGoogleLogin, startLogout } from "../actions";

import PokemonImage from "./../assets/img/img_login/imgPokemon_login.png";

const LoginScreen = () => {
	const { push } = useHistory();

	const dispatch = useDispatch();

	const handleGoogleLogin = () => {
		dispatch(startGoogleLogin());
	};

	const handleLogout = async () => {
		dispatch(clearPokemonsLogout());
		dispatch(startLogout());
	};

	const name = useSelector((state) => state.name);
	const photo = useSelector((state) => state.photo);
	const headerLoading = useSelector((state) => state.headerLoading);

	return (
		<div className="loginScreen">
			<div className="loginScreen__container">
				{headerLoading ? (
					<h2 className="header__info">...</h2>
				) : name === null ? (
					<div className="loginScreen__form">
						<div className="loginScreen__login">
							<h3>Log In</h3>
							<div className="google-btn" onClick={handleGoogleLogin}>
								<div className="google-icon-wrapper">
									<img
										className="google-icon"
										src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
										alt="google button"
									/>
								</div>
								<p className="btn-text">
									<b>Sign in with google</b>
								</p>
							</div>
						</div>
					</div>
				) : (
					<div className="loginScreen__form_active">
						<h1>Welcome {name}</h1>

						<div>
							<img src={photo} alt="profile_img" />
						</div>
						<div className="loginScreen__buttonLogout" onClick={handleLogout}>
							LOGOUT
						</div>
					</div>
				)}
				<div className="loginScreen__right">
					<button
						onClick={() => {
							push("/");
						}}
						className="loginScreen__button"
					>
						<i className="far fa-arrow-alt-circle-left"></i>
						Go Back
					</button>
					<img src={PokemonImage} alt="" />
				</div>
			</div>
		</div>
	);
};

export default LoginScreen;
