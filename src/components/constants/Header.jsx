import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import PulseLoader from "react-spinners/PulseLoader";
import Swal from "sweetalert2";

import Logo from "./../../assets/img/img_home/logo.png";

const Header = () => {
	const name = useSelector((state) => state.name);
	const photo = useSelector((state) => state.photo);

	const headerLoading = useSelector((state) => state.headerLoading);

	return (
		<div>
			<header className="header___container">
				{headerLoading ? (
					<PulseLoader color={"#ffe500"} />
				) : name === null ? (
					<ul>
						<li>
							<Link to="/login">
								<i className="fas fa-user-circle"></i>
								&emsp;Log In
							</Link>
						</li>
					</ul>
				) : (
					<ul>
						<li className="header__profile">
							<Link to="/login">
								<div>
									<img src={photo} className="profile_image" alt="profile_img" />
								</div>
								<div>
									&nbsp;
									{name}
								</div>
							</Link>
						</li>
					</ul>
				)}

				<div className="header__logo">
					<Link to="/">
						<img src={Logo} alt="Pokemon Logo" />
					</Link>
				</div>
				<div className="header__home header__favorites">
					<Link to="/">
						<i className="fas fa-home"></i> Home
					</Link>
				</div>
				<div className="header__favorites">
					<Link to="/favorites">
						<i className="fas fa-star"></i>
						&nbsp;Favorites
					</Link>
				</div>
				<div
					className="header__info"
					onClick={() => {
						Swal.fire(
							"Proyecto final realizado por Carlos Peñaloza, para el curso de React Js en Escalab Academy"
						);
					}}
				>
					<i className="far fa-question-circle"></i>
				</div>
			</header>
		</div>
	);
};

Header.propTypes = {
	name: PropTypes.string,
	photo: PropTypes.string,
};

export default Header;
