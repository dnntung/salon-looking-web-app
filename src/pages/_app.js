import "../styles/globals.css";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import React from "react";

export function reportWebVitals(metric) {
    console.log(metric);
}

function App({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            {/* Your component tree. Now you can override MUI's styles. */}
            {getLayout(<Component {...pageProps} />)}
        </StyledEngineProvider>
    );
}

export default App;
