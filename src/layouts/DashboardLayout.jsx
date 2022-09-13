import { Box, Container } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

export default function DashboardLayout({ children }) {
    return (
        <Box>
            <Container>{children}</Container>
        </Box>
    );
}

DashboardLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};
