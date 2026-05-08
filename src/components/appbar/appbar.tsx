import {type FC, useLayoutEffect, useRef, useState, type ReactElement} from "react";
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import {useConditionalRef} from "@/context/context_index";
import type {IBaseRefProps} from "@/ibase/ibase";

export interface AppBarProps extends IBaseRefProps {
    title?: string;
    appbar_sx?: object;
}

export interface AppBarState {
    register_element: (elem: Record<string, ReactElement>) => void
}

export const UIAppBar: FC<AppBarProps> = ({title, appbar_sx, refKey, register_component}) => {
    const [elements, setElements] = useState({} as Record<string, ReactElement>)
    const setRegistryRef = useConditionalRef(refKey, register_component)

    const handleSetElements = (elem: Record<string, ReactElement>) => {
        const current = {...elements, ...elem}
        setElements(current)
    }

    const localRef = useRef<AppBarState>({
        register_element: handleSetElements,
    });

    useLayoutEffect(() => {
        setRegistryRef(localRef.current);
        return () => setRegistryRef(null);
    }, [setRegistryRef]);

    return (
        <AppBar position="static" sx={{
            minHeight: 50,
            px: 2,
            mt: 'auto',
            backgroundColor: "black",
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            ...appbar_sx,
        }}>
            <Toolbar disableGutters>
                <Box
                    component="img"
                    sx={{ height: 20, marginRight: 2 }}
                    alt="Logo"
                    src="/logo.png"
                />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
                {Object.keys(elements).map(x => elements[x])}
            </Toolbar>
        </AppBar>
    )
}