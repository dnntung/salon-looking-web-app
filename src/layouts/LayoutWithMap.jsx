import { Box, CssBaseline, Grid } from "@mui/material";
import MapComponent from "src/components/MapComponent";

export const LayoutWithMap = ({ children }) => {
    return (
        <>
            <Box className="h-screen">
                <Grid container className="h-full">
                    <Grid item xs={3}>
                        {children}
                    </Grid>
                    <Grid item xs={9}>
                        <MapComponent />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};
