import { useState } from "react";

const useModal = (props) => {
	const [isOpen, setIsOpen] = useState(props);
	const [idToModal, setidToModal] = useState();

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {}

	function closeModal() {
		setIsOpen(false);
	}

	return {
		isOpen,
		setIsOpen,
		idToModal,
		setidToModal,
		openModal,
		afterOpenModal,
		closeModal,
	};
};

export default useModal;
