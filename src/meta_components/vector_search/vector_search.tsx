import {type FC, type RefObject, type SetStateAction, type ReactElement, useState} from "react";
import {Input, type InputProps, Stack, type StackProps} from "@mui/material";
import {
    type ApiClient, GridWithButtons, type GridWithButtonsProps,
    Refresh, SetSearch,
    type TableState,
    useRefIndex
} from "components";


export interface VectorSearchProps {
    api: ApiClient
    endpoint: string
    grid_props?: GridWithButtonsProps
    grid_sx?: object
    stack_props?: StackProps
    input_props?: InputProps

    input_elem?: ReactElement
}

export const VectorSearch: FC<VectorSearchProps> = (params) => {
    const [search, setSearch] = useState<string>("")
    const context = useRefIndex()

    const handleOnChange = async (event: { target: { value: SetStateAction<string>; }; }) => {
        const gridRef = {current: context?.get(search)} as RefObject<TableState>
        const s = event.target.value as string
        SetSearch(gridRef, s)
        setSearch(event.target.value)
        await Refresh(gridRef)
    }
    const Elem = () => {
        return params.input_elem || <Input value={search} {...params.input_props} onChange={handleOnChange}  />
    }
    const sharedProps = {
      value: search,
      ...params.input_props,
      onChange: handleOnChange,
    }

    return (
        <Stack sx={{justifyContent: "center", alignItems: "center"}} direction={"column"} {...params.stack_props} >
            <Elem {...sharedProps} />
            <GridWithButtons
                button_stack_params={{
                    sx: {
                        justifyContent: "flex-end",
                        alignItems: "center",
                        width: '100%'
                    }}}
                header_stack_params={{
                    sx: {
                        justifyContent: "flex-start",
                        alignItems: "center",
                        width: '100%'
                    }
                }}
                toolbar={false}
                checkbox_select={true}
                row_details={false}
                api={params.api}
                endpoint={params.endpoint}
                title={search}
                refKey={search}
                datagrid_sx={params.grid_sx}
                register_component={true} />
        </Stack>
    )
}