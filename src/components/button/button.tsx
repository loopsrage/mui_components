import type {FC} from "react";
import type {ApiWrapper} from "../../utility/fetchapi";
import {Button} from "@mui/material";

interface ApiButtonProps {
    api: ApiWrapper;
    endpoint: string;
    onClick?: (data: never) => void;
}

export const ApiButton: FC<ApiButtonProps> = ({ api, endpoint, onClick }) => {
    const handleClick = async () => {
        try {
            const result = await api.at("/" + endpoint, {
                fetchParams: { method: "POST" },
                args: { Feature: endpoint }
            });

            if (onClick) onClick(result);
            else console.log("Success:", result);
        } catch (error) {
            console.error("Button Action Failed:", error);
        }
    };

    return (
        <Button variant="contained" onClick={handleClick}>
            {endpoint}
        </Button>
    );
};