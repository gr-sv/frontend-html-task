import React from "react";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import styled from "styled-components";

const StyledLogoWrapper = styled.div`
	width: 100%;
	padding-right: 4em;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 0.4em;
`;

const StyledLogo = styled.img`
	width: 2em;
	height: auto;
`;

const StyledTitle = styled.h1`
	font-size: 1.5em;
	color: var(--color-text-logo-light-default);
`;

const StyledToggle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 2em;
	height: 2em;
	padding: 0.63em;
	color: var(--color-text-light-default);
	background: #e2e8f0;
	border-radius: 100%;
	position: absolute;
	right: -7%;
	z-index: 10;

	&:hover {
		color: var(--color-text-light-hover);
	}

	&:active {
		color: var(--color-text-light-active);
	}
`;

const Logo = () => {

	const [isOpened, setIsOpened] = useState(true);

	const toggleSidebar = () => {
		setIsOpened(v => !v);
	};

	return (
		<StyledLogoWrapper>
			<StyledLogo src={ logo } alt="TensorFlow logo"/>

			<StyledTitle>TensorFlow</StyledTitle>

			<StyledToggle onClick={ toggleSidebar }>
				<FontAwesomeIcon icon={ isOpened ? 'angle-left' : 'angle-right' }/>
			</StyledToggle>
		</StyledLogoWrapper>
	)
}

export default Logo;