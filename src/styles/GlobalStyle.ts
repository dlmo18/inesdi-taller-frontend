import { createGlobalStyle } from 'styled-components';
import { themes } from './ColorStyles';

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${themes.custom.backgroundColor};
        @media (prefers-color-scheme: dark) {
	        background: ${themes.custom.backgroundColor};
        }   
    }
`;
