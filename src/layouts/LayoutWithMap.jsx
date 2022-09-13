import { Box, Grid } from "@mui/material";
import Head from "next/head";
import MapComponent from "src/components/MapComponent";

export const LayoutWithMap = ({ children }) => {
    return (
        <>
            <Head></Head>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        {children}
                    </Grid>
                    <Grid item xs={8}>
                        <MapComponent />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};
