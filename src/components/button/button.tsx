import type {FC} from "react";
import {Button} from "@mui/material";
import type {ApiClient} from "../../utility/api";

interface ApiButtonProps {
    api: ApiClient;
    endpoint: string;
    onClick?: (data: unknown) => void;
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