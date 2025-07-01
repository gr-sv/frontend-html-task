import React, { useState } from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";
import styled, { css } from 'styled-components'

library.add(fas);

const StyledAppWrapper = styled.div`
	padding: 70px;
	transition: .3s;

	${({ color }) => color ==='dark' ? css`
		background-color: var(--color-background-dark-default);
		color: var(--color-text-dark-default);`
		: css`
		background-color: var(--color-background-light-default);
		color: var(--color-text-light-default);`
	}
`;

const App = () => {

	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
	}

    return (
		<StyledAppWrapper color={theme}>
			<Sidebar color={theme} onToggleTheme = {toggleTheme} />
		</StyledAppWrapper>
    )
}

export default App;