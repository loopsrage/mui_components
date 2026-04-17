import {type FC } from "react";
import { type Props } from "@/components/grid/grid";
import {GridWithButtons} from "@/meta_components/grid_with_buttons/grid_with_buttons";


export const CsvDatagridSx = () => {
    const stickyCommon = {
        position: 'sticky',
        zIndex: 2, // Cells sit above normal content
        backgroundColor: 'white', // Crucial to hide content scrolling behind
    };

    const stickyHeaderCommon = {
        position: 'sticky',
        zIndex: 3, // Headers sit above sticky cells
        backgroundColor: '#191E23 !important', // Match your header color
    };
    return {
        '& .MuiDataGrid-columnHeader[data-field="Field"]': {
            ...stickyHeaderCommon,
            left: 0,
        },
        '& .MuiDataGrid-cell[data-field="Field"]': {
            ...stickyCommon,
            left: 0,
            borderRight: '1px solid #e0e0e0', // Optional: visual separator
        },

        // --- 2. Pin "Value" to the RIGHT ---
        '& .MuiDataGrid-columnHeader[data-field="Value"]': {
            ...stickyHeaderCommon,
            right: 0,
        },
        '& .MuiDataGrid-cell[data-field="Value"]': {
            ...stickyCommon,
            right: 0,
            borderLeft: '1px solid #e0e0e0', // Optional: visual separator
        },
        "& .MuiSvgIcon-root MuiSvgIcon-fontSizeSmall MuiDataGrid-sortIcon": {
            color: '#fff',
        },
        '& .MuiDataGrid-columnHeaderTitle': {
            fontSize: '1rem',
            fontWeight: 'bold',
        },
        '& .MuiDataGrid-columnHeaders div[role="row"]': {
            backgroundColor: '#191E23 !important',
            color: 'white',
        },
        '& .MuiDataGrid-columnHeader': {
            backgroundColor: '#191E23 !important',
            color: 'white',
        },
        '& .MuiDataGrid-filler': {
            backgroundColor: 'black !important',
        },
        '& .MuiDataGrid-menuIcon': {
            color: 'white',
        },
        '& .MuiDataGrid-columnSeparator': {
            color: '#333',
        },
        '& .MuiDataGrid-main': {
            overflow: 'auto',
            minWidth: '100%', // Add this to force container expansion
        },
        // Ensure the root container takes full width
        '&': {
            width: '100%',
        }
    }
}

export const CsvGrid: FC<Props> = ({api, endpoint, refKey, register_component, ...props}) => {
    console.log(api, endpoint)
    return <GridWithButtons api={api} endpoint={"get_paginated"} buttons={[]} title={""} refKey={refKey} register_component={register_component} {...props} />
}