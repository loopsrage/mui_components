import {type FC, useLayoutEffect, useRef, useState,type RefObject, type ReactElement} from "react";
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import {useConditionalRef} from "@/context/context_index";
import type {IBaseRefProps} from "@/ibase/ibase";

export interface AppBarProps extends IBaseRefProps {
    title?: string;
    appbar_sx?: object;
}

export interface AppBarState {
    register_element: (elem: Record<string, ReactElement>) => void
    title?: string;
    set_appbar_title: (title: string) => void
}

export const SetAppBarTitle = (ref: RefObject<AppBarState>, title: string) => {
    const st = ref.current
    if (!st) return;

    st.title = title
    st.set_appbar_title(title)
    ref.current = st
}

export const GetAppBarTitle = (ref: RefObject<AppBarState>) => {
    const st = ref.current
    if (!st) return;

    return st.title
}

export const UIAppBar: FC<AppBarProps> = ({title, appbar_sx, refKey, register_component}) => {
    const [elements, setElements] = useState({} as Record<string, ReactElement>)
    const [, setTitle] = useState("")
    const setRegistryRef = useConditionalRef(refKey, register_component)

    const handleSetElements = (elem: Record<string, ReactElement>) => {
        const current = {...elements, ...elem}
        setElements(current)
    }

    const localRef = useRef<AppBarState>({
        register_element: handleSetElements,
        title: title,
        set_appbar_title: (title: string) => {
            setTitle(title)
        }
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
                    {GetAppBarTitle(localRef)}
                </Typography>
                {Object.keys(elements).map(x => elements[x])}
            </Toolbar>
        </AppBar>
    )
}