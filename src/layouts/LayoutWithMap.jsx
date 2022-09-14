import { Box, CssBaseline, Grid } from "@mui/material";
import Head from "next/head";
import MapComponent from "src/components/MapComponent";
import React from "react";
import { MapProvider } from "src/components/MapProvider";
import { ModalProvider } from "src/components/ModalProvider";

export const LayoutWithMap = ({ children }) => {
    return (
        <ModalProvider>
            <Head>
                <link
                    href="https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.css"
                    rel="stylesheet"
                />
            </Head>
            <MapProvider>
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
            </MapProvider>
        </ModalProvider>
    );
};
