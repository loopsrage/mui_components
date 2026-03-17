import type {FC} from "react";
import {Button} from "@mui/material";
import type {ApiClient} from "../../utility/api";

interface ApiButtonProps {
    api: ApiClient;
    endpoint: string | null;
    onClick?: (data: unknown) => void;
}

export const ApiButton: FC<ApiButtonProps> = ({ api, endpoint, onClick }) => {
    const handleClick = async () => {
        try {
            const result = await api.at("/" + endpoint, {
                fetchParams: { method: "GET" },
                args: {}
            });

            if (onClick) onClick(() => console.log(result));
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