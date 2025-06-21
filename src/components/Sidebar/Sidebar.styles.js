import styled from 'styled-components';

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
	outline: 0.13em solid var(--color-sidebar-background-light-default);
	outline-offset: 0.13em;
	position: relative;
`;

//Logo
export const StyledLogoWrapper = styled.div`
	width: 100%;
	padding: 0 4.5em 0 1.5em;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 0.4em;
`;

export const StyledLogo = styled.img`
	width: 2em;
	height: auto;
`;

export const StyledTitle = styled.h1`
	font-size: 1.5em;
	color: var(--color-text-logo-light-default);
`;

export const StyledToggle = styled.div`
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

//Routes
export const AllRoutesWrapper = styled.div`
	width: 100%;
	padding: 1.5em 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: stretch;
	flex-grow: 1;
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
	margin: 0 1.5em;
	color: var(--color-text-light-default);
	background-color: var(--color-sidebar-background-light-default);
	border-radius: 1em;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 0.6em;
	transition: 0.3s;

	&:hover {
		color: var(--color-text-light-hover);
		background-color: var(--color-sidebar-background-light-hover);
	}

	&:active {
		color: var(--color-text-light-active);
		background-color: var(--color-button-background-light-active);
	}
`;

export const StyledButtonThemeWrapper = styled(StyledRoutesWrapper)`
	width: 100%;
	padding-top: 1em;
	border-top: 0.13em solid var(--color-sidebar-background-light-hover);
`;

export const StyledButtonTheme = styled(StyledRoute)`

`;