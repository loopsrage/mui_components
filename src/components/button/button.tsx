import type {FC, ReactElement} from "react";
import {Button, type ButtonProps} from "@mui/material";
import type {ApiClient} from "../../utility/api";

interface ApiButtonProps extends ButtonProps {
    api?: ApiClient | null;
    endpoint: string | null;

    children?: ReactElement | ReactElement[] | null | string;
    get_args?: () => object;
    fetch_params?: () => object;

    callback?: (fetchParams: object, args: object, result: unknown) => void;
}

export const ApiButton: FC<ApiButtonProps> = ({ api, endpoint, children, get_args, fetch_params, callback, ...props}) => {
    const handleClick = async () => {
        try {
            let args = {}
            if (get_args) {
                args = get_args()
            }

            let fetchParams = {
                method: "GET"
            }
            if (fetch_params) {
                fetchParams = {...fetchParams, ...fetch_params()}
            }

            const result = await api?.at("/" + endpoint, {
                fetchParams: fetchParams,
                args: args
            });

            if (callback) {
                callback(fetchParams, args, result)
            }
        } catch (error) {
            console.error("Button Action Failed:", error);
        }
    };

    return (
        <Button onClick={handleClick} {...props}>
            {children}
        </Button>
    );
};