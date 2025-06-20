import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "styled-components";

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const StyledRoutesWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: stretch;
	gap: 0.3em;
`;

const StyledRoute = styled.div`
	padding: 0.7em;
	color: var(--color-text-light-default);
	background-color: var(--color-sidebar-background-light-default);
	border-radius: 1em;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 0.6em;

	&:hover {
		color: var(--color-text-light-hover);
		background-color: var(--color-sidebar-background-light-hover);
	}

	&:active {
		color: var(--color-text-light-active);
		background-color: var(--color-button-background-light-active);
	}
`;

const Routes = () => {

	const goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

	return (
		<>
			<StyledRoutesWrapper>
				{
					routes.map(route => (
						<StyledRoute
							key={ route.title }
							onClick={() => {
								goToRoute(route.path);
							}}
						>
							<FontAwesomeIcon icon={ route.icon }/>
							<span>{ route.title }</span>
						</StyledRoute>
					))
				}
			</StyledRoutesWrapper>

			 <StyledRoutesWrapper>
				{
					bottomRoutes.map(route => (
						<StyledRoute
							key={ route.title }
							onClick={() => {
								goToRoute(route.path);
							}}
						>
							<FontAwesomeIcon icon={ route.icon }/>
							<span>{ route.title }</span>
						</StyledRoute>
					))
				}
			</StyledRoutesWrapper>
		</>
	)
}

export default Routes;