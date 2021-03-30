import React from "react";
import Modal from "react-modal";
import { useFetch } from "../../hooks/useFetch";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ModalScreen = ({ isOpen, afterOpenModal, closeModal, setIsOpen, id }) => {
	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			borderRadius: "50px",
			transform: "translate(-50%, -50%)",
			width: "85%",
			maxWidth: "1440px",
		},
	};

	const urlModal = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const { data, loading } = useFetch(urlModal);

	Modal.setAppElement("#modal");
	return (
		<>
			<Modal
				isOpen={isOpen}
				afterOpenModal={afterOpenModal}
				closeModal={closeModal}
				style={customStyles}
			>
				{loading ? (
					<h1>Loading....</h1>
				) : data !== null ? (
					<div className="modalScreen">
						<h1 className="modalScreen__title">{data.name}</h1>
						<div className="modalScreen__container">
							<div className="modalScreen__img">
								<LazyLoadImage
									effect="blur"
									src={data.sprites.other["official-artwork"].front_default}
									alt={data.name}
									className="modal_image"
								/>
							</div>
							<div className="modalScreen__info">
								<ul>
									<li>
										<strong>Type: </strong>
										<ul>
											{data.types.map((typ, i) => {
												return <li key={i}>{typ.type.name}</li>;
											})}
										</ul>
									</li>
									<li>
										<strong>Abilities: </strong>
										<ul>
											{data.abilities.map((ab, i) => {
												return <li key={i}>{ab.ability.name}</li>;
											})}
										</ul>
									</li>
									<li>
										<strong>Stats: </strong>
										<ul>
											{data.stats.map((st, i) => {
												return (
													<li key={i}>
														{st.stat.name}: {st.base_stat}
													</li>
												);
											})}
										</ul>
									</li>
								</ul>
								<div className="modalScreen__mini_images">
									<div className="mini_image_modal">
										<LazyLoadImage
											effect="blur"
											src={data.sprites.back_default}
											alt={data.name}
										/>
									</div>
									<div className="mini_image_modal">
										<LazyLoadImage
											effect="blur"
											src={data.sprites.back_shiny}
											alt={data.name}
										/>
									</div>
									<div className="mini_image_modal">
										<LazyLoadImage
											effect="blur"
											src={data.sprites.front_default}
											alt={data.name}
										/>
									</div>
									<div className="mini_image_modal">
										<LazyLoadImage
											effect="blur"
											src={data.sprites.front_shiny}
											alt={data.name}
										/>
									</div>
								</div>
							</div>
						</div>
						<div
							className="loginScreen__button modal_button"
							onClick={() => {
								setIsOpen(false);
							}}
						>
							<i className="far fa-times-circle"></i>
						</div>
					</div>
				) : null}
			</Modal>
		</>
	);
};

export default ModalScreen;
