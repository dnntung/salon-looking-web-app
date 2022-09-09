import '../styles/globals.css'
import {StyledEngineProvider} from "@mui/material";

export function reportWebVitals(metric) {
    console.log(metric)
}

function App({Component, pageProps}) {
    return <StyledEngineProvider injectFirst>
        {/* Your component tree. Now you can override MUI's styles. */}
        <Component {...pageProps} />
    </StyledEngineProvider>
}

export default App
