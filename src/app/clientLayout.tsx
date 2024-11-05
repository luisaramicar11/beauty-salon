"use client";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyling";
import { GlobalTheme } from "./globalTheme"; 

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ThemeProvider theme={GlobalTheme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

export default ClientLayout;