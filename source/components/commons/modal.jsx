import React from "react";
import PropTypes from "prop-types";
import style from "style/components/commons/modal.css";

export default function Modal({ active = false, setActive = () => {}, children = null }) {
	return active ? (
		<div style={style.modalLayout} onClick={() => setActive(false)}>
			<div style={style.modal}>{children}</div>
		</div>
	) : null;
}

Modal.propTypes = {
	active: PropTypes.bool,
	setActive: PropTypes.func,
	children: PropTypes.any
};
