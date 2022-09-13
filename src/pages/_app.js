import "../styles/globals.css";
import { StyledEngineProvider } from "@mui/material";

export function reportWebVitals(metric) {
    console.log(metric);
}

function App({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);

    return (
        <StyledEngineProvider injectFirst>
            {/* Your component tree. Now you can override MUI's styles. */}
            {getLayout(<Component {...pageProps} />)}
        </StyledEngineProvider>
    );
}

export default App;
