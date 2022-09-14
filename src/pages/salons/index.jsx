import {
    Box,
    Button,
    IconButton,
    Modal,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { useMap } from "src/components/MapProvider";
import { useModal } from "src/components/ModalProvider";
import { LayoutWithMap } from "src/layouts/LayoutWithMap";
import { modalIds } from "src/utils/constants";
import CloseIcon from "@mui/icons-material/Close";

export default function SalonsPage() {
    const { show, setShow, setId, currentId } = useModal();
    const { currentCoordinates } = useMap();

    return (
        <>
            <div>"Salon list here"</div>
            <Modal
                open={show && currentId === modalIds.CREATE_SALON}
                onClose={(e, reason) =>
                    reason !== "backdropClick" && setShow(false)
                }
            >
                <Box className="bg-white w-[500px] p-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex justify-between mb-5 items-start">
                        <Typography variant="h4">Thêm địa điểm mới</Typography>
                    </div>
                    <Stack spacing={2}>
                        <TextField required label="Tên" />
                        <TextField required label="Địa chỉ" />
                        <Typography variant="h5">Vị trí</Typography>
                        <Stack direction="row" spacing={2}>
                            <TextField
                                disabled
                                required
                                label="Lng"
                                value={currentCoordinates?.lng || "?"}
                            />
                            <TextField
                                disabled
                                required
                                label="Lat"
                                value={currentCoordinates?.lat || "?"}
                            />
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained">Thêm</Button>
                            <Button
                                variant="text"
                                onClick={() => {
                                    setShow(false);
                                }}
                            >
                                Hủy
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Modal>
        </>
    );
}

SalonsPage.getLayout = (children) => <LayoutWithMap>{children}</LayoutWithMap>;
