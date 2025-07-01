import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Sidebar
export const StyledSidebar = styled.div`
	width: max-content;
	min-height: max-content;
	height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding: 1.5em 0;
	color: var(--color-text-light-default);
	background-color: var(--color-sidebar-background-light-default);
	border-radius: 1em;
	outline: 0.13em solid;
	outline-offset: 0.13em;
	position: relative;
	transition: .3s;

	${({ color }) => color === 'dark' ? css`
		color: var(--color-text-dark-default);
		background-color: var(--color-sidebar-background-dark-default);
		outline-color: var(--color-sidebar-background-dark-default);`
		: css`
		color: var(--color-text-light-default);
		background-color: var(--color-sidebar-background-light-default);
		outline-color: var(--color-sidebar-background-light-default);`
	}
`;

//Logo
export const StyledLogoWrapper = styled.div`
	width: 100%;
	padding: 0 4.5em 0 1.5em;
	padding-right: ${({ isOpened }) => (isOpened ? '4.5em' : '1.5em')};
	display: flex;
	flex-direction: row;
	justify-content: ${({ isOpened }) => (isOpened ? 'flex-start' : 'center') };
	align-items: center;
	gap: ${({ isOpened }) => (isOpened ? '0.4em' : '0')};
	transition: .4s;
`;

export const StyledLogo = styled.img`
	width: 2em;
	height: auto;
	padding: .125em 0;
`;

export const StyledTitle = styled.h1`
	display: ${({ isOpened }) => (isOpened ? 'block' : 'none')};
	font-size: 1.5em;
	color: var(--color-text-logo-light-default);

	${({ color }) => color === 'dark' ? css`
		color: var(--color-text-logo-dark-default);`
		: css`
		color: var(--color-text-logo-light-default);`
	}
`;

export const StyledToggle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 2em;
	height: 2em;
	padding: 0.63em;
	border-radius: 100%;
	position: absolute;
	right: ${({ isOpened }) => (isOpened ? '-7%' : '-55%')};
	z-index: 10;
	transition:
		color .3s,
		background-color .3s;

	${({ color }) => color === 'dark' ? css`
		color: var(--color-text-dark-default);
		background-color: ${({ isOpened }) => (isOpened ? css`
			var(--color-background-dark-default)`
			: css`
			var(--color-sidebar-background-dark-default)`
		)};
		
		&:hover {
			color: var(--color-text-dark-hover);
		}

		&:active {
			color: var(--color-text-dark-active);
		}`
		: css`
		color: var(--color-text-light-default);
		background-color: ${({ isOpened }) => (isOpened ? css`
			var(--color-background-light-default)`
			: css`
			var(--color-sidebar-background-light-default)`
		)};

		&:hover {
			color: var(--color-text-light-hover);
		}

		&:active {
			color: var(--color-text-light-active);
		}`
	}
`;

//Routes
export const AllRoutesWrapper = styled.div`
	width: 100%;
	padding: 1.5em 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: stretch;
	flex-grow: 1;
	gap: .3em;
`;

export const StyledRoutesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: stretch;
	gap: 0.3em;
`;

export const StyledRoute = styled.div`
	padding: 0.7em;
	margin: ${({ isOpened }) => (isOpened ? '0 1.5em' : '0 1.2em')};
	border-radius: 1em;
	display: flex;
	flex-direction: row;
	justify-content: ${({ isOpened }) => (isOpened ? 'flex-start' : 'center')};
	align-items: center;
	gap: ${({ isOpened }) => (isOpened) ? '0.6em' : '0'};
	transition: .3s;

	${({ color }) => color === 'dark' ? css`
		color: var(--color-text-dark-default);
		background-color: var(--color-sidebar-background-dark-default);
		
		&:hover {
			color: var(--color-text-dark-hover);
			background-color: var(--color-button-background-dark-hover);
		}

		&:active {
			color: var(--color-text-dark-active);
			background-color: var(--color-sidebar-background-dark-active);
		}`
		: css`
		color: var(--color-text-light-default);
		background-color: var(--color-button-background-light-default);

		&:hover {
			color: var(--color-text-light-hover);
			background-color: var(--color-button-background-light-hover);
		}

		&:active {
			color: var(--color-text-light-active);
			background-color: var(--color-button-background-light-active);
		}`
	}
`;

export const StyledIcon = styled(FontAwesomeIcon)`
	padding: 0.25em 0;
`;

export const StyledItem = styled.span`
	display: ${({ isOpened }) => (isOpened ? 'block' : 'none')};
`;

export const StyledButtonThemeWrapper = styled(StyledRoutesWrapper)`
	width: 100%;
	padding-top: 1em;
	border-top: 0.13em solid;
	transition: .3s;

	${({ color }) => color === 'dark' ? css`
		border-color: var(--color-background-dark-default)`
		: css`
		border-color: var(--color-background-light-default)`
	}
`;