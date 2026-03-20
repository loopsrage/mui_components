import {render} from '@testing-library/react'
import { test } from 'vitest'
import {HFCenteredLayout} from "./hf_centered";
import {GridWithButtons} from "../grid_with_buttons/grid_with_buttons";
import {Api} from "../../utility/api";
import {Button,  Paper, Typography} from "@mui/material";
import {
    GetProgressValue,
    SetProgressValue,
    UIInput,
    type UploadInputState
} from "../../components/upload_input/upload_input";
import {CenteredContainer} from "../../components/centered_container/centered_container";
import SendIcon from "@mui/icons-material/Send";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import type {RefObject} from "react";
test('should load and display server-side data', async () => {
    const mockApi = Api({endpoint: "http://localhost:8000"})
    const onDropSuccess = (ref: RefObject<UploadInputState>, acceptedFiles: File[]) => {
        const intervalId = setInterval(() => {
            const current = GetProgressValue(ref)
            if (current >= 100) {
                clearInterval(intervalId);
            } else{
                console.log(current)
                SetProgressValue(ref, current+1)
            }
        }, 100);
        Object.keys(acceptedFiles).forEach(acceptedFile => {console.log(acceptedFile)})
    }
    render(<HFCenteredLayout>

        <CenteredContainer  sx={{ minHeight: "10vh", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography   align="center" sx={{ fontWeight: 'bold', width: '100%', px: 2}} >
                HTS Code Lookup
            </Typography>
            <Typography  align="center" sx={{ width: '100%', px: 2 }}>
                Upload CSV or paste / type in part numbers (one per line or comma-separated).
            </Typography>
        </CenteredContainer>
        <CenteredContainer  sx={{minHeight: "10hv"}}>
            <UIInput refKey={"csv_upload"} register_component={true} onDropSuccess={onDropSuccess} />
        </CenteredContainer>
        <CenteredContainer sx={{minHeight: "10hv"}}>
            <Paper>
                <GridWithButtons title={"Review Classifications"} api={mockApi} grid_endpoint={"list"}
                                 buttons={[(
                                     <Button variant={"outlined"} startIcon={<SaveAltIcon />}>
                                         CSV
                                     </Button>
                                 ),
                                 (
                                     <Button variant={"outlined"} startIcon={<SendIcon />}>
                                         Send To OTM/GTM
                                     </Button>
                                 )
                                 ]}
                                 row_details={true} refKey={"test_grid"} register_component={true} />
            </Paper>
        </CenteredContainer>
    </HFCenteredLayout>)
    await new Promise(() => {});
})