import React from "react";

const modalContext = React.createContext();
export const useModal = () => React.useContext(modalContext);

export const ModalProvider = ({ children }) => {
    const [show, setShow] = React.useState(false);
    const [currentId, setId] = React.useState(null);

    return (
        <modalContext.Provider
            value={{
                show,
                setShow,
                currentId,
                setId,
            }}
        >
            {children}
        </modalContext.Provider>
    );
};
