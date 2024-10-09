import React from "react";
import PropTypes from "prop-types";
import style from "style/components/commons/spinner.css";

export default function Spinner({ active = false, size = 0 }) {
	return active ? <div style={style.spinner} data-size={size} /> : null;
}

Spinner.propTypes = {
	active: PropTypes.bool,
	size: PropTypes.number
};
