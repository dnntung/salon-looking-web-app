import React from "react";

const mapContext = React.createContext();
export const useMap = () => React.useContext(mapContext);

export const MapProvider = ({ children }) => {
    const [currentCoordinates, setCoordinates] = React.useState(null);

    return (
        <mapContext.Provider
            value={{
                currentCoordinates,
                setCoordinates,
            }}
        >
            {children}
        </mapContext.Provider>
    );
};
