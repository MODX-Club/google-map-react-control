// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
	map: {
		controls: {},
	},
	maps: {
		ControlPosition: {},
	},
	position: "",
};

type State = {};

type _reactInternalInstance = {
	_renderedComponent: {
		_hostNode: {

		},
	},
};

export default class GoogleMapReactControl extends React.Component { // eslint-disable-line react/prefer-stateless-function

	state: State;

	_reactInternalInstance: _reactInternalInstance;

	static defaultProps = {
	};

	constructor(props: Props) {

		super(props);

		this.state = {};

		// this._reactInternalInstance = {};

	}

	componentDidMount() {

		const {
			map,
			maps,
			position,
		} = this.props;

		const renderedComponent = this && this._reactInternalInstance && this._reactInternalInstance._renderedComponent || undefined;

		const pos = position && maps.ControlPosition && maps.ControlPosition[position] && map.controls && map.controls[maps.ControlPosition[position]];

		if (pos && renderedComponent) {

			pos.push(renderedComponent._hostNode);

		}

	}

	render() {

		const {
			...other
		} = this.props;

		return (<div
			{ ...other }
		>
		</div>);

	}
}

GoogleMapReactControl.propTypes = {
	map: PropTypes.object.isRequired,
	maps: PropTypes.object.isRequired,
	position: PropTypes.oneOf([
		'TOP_LEFT',
		'TOP',
		'TOP_RIGHT',
		'CENTER_LEFT',
		'CENTER',
		'CENTER_RIGHT',
		'BOTTOM_LEFT',
		'BOTTOM',
		'BOTTOM_RIGHT',
	]).isRequired,
};