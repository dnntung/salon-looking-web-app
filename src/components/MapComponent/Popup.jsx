import { Button, Stack, Typography } from "@mui/material";

export const Popup = ({ children, onCancel, onConfirm }) => {
    return (
        <div>
            <Stack spacing={1}>
                <Typography>Dang tai</Typography>
                <Stack spacing={1} direction={"row"}>
                    <Button variant="contained" onClick={onConfirm}>
                        Thêm
                    </Button>
                    <Button variant="text" onClick={onCancel}>
                        Hủy
                    </Button>
                </Stack>
            </Stack>
        </div>
    );
};
