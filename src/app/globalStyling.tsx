'use client';
import { createGlobalStyle } from "styled-components";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ['latin'],
    weight: ["300", "400", "500", "700"] 
});

export const GlobalStyle = createGlobalStyle`

html {
    background: ${({ theme }) => theme.colors.bgGradient};
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

body {
    margin: 20px auto; 
    border-radius: 1rem;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.bgWhite};
    min-height: calc(100vh - 40px); 
    width: 80%;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: bolder;
}

p {
    color: ${({ theme }) => theme.colors.textBlack}; 
    line-height: 1.5;
    font-weight: 300;
    margin: 0;
    word-wrap: break-word;
    overflow-wrap: break-word;
}

input, select, textarea, button, option {
    font-family: ${roboto.style.fontFamily};
}

span {
    font-style: italic;
    font-weight: normal;
}
`;