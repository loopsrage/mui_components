import {render} from '@testing-library/react'
import { test } from 'vitest'
import {HFCenteredLayout} from "./hf_centered";
import {GridWithButtons} from "../grid_with_buttons/grid_with_buttons";
import {Api} from "../../utility/api";
import { Paper, Stack, Typography} from "@mui/material";
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
import {ApiButton} from "../../components/button/button";
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

    // const csvCallback = (fetchParams, args, result) => {}
    // const otmCallback = (fetchParams, args, result) => {}

    render(
        <HFCenteredLayout>
            <CenteredContainer sx={{minHeight: "10hv", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Stack gap={3}>
                    <Typography   align="center" sx={{ fontWeight: 'bold', width: '100%', px: 2}} >
                        HTS Code Lookup
                    </Typography>
                    <Typography  align="center" sx={{ width: '100%', px: 2 }}>
                        Upload CSV or paste / type in part numbers (one per line or comma-separated).
                    </Typography>
                    <UIInput refKey={"csv_upload"} register_component={true} onDropSuccess={onDropSuccess} />
                    <Paper>
                        <GridWithButtons title={"Review Classifications"} api={mockApi} grid_endpoint={"list"}
                                         buttons={[
                                             (
                                                 <ApiButton variant={"outlined"} startIcon={<SaveAltIcon/>} api={mockApi}
                                                            endpoint={""}
                                                            // callback={csvCallback}
                                                 >
                                                     {"CSV"}
                                                 </ApiButton>
                                            ),
                                             (
                                                 <ApiButton variant={"outlined"} startIcon={<SendIcon/>} api={mockApi}
                                                            endpoint={""}
                                                            // callback={otmCallback}
                                                 >
                                                     {"Send To OTM/GTM"}
                                                 </ApiButton>
                                             )
                                         ]}
                                         row_details={true} refKey={"test_grid"} register_component={true} />
                    </Paper>
                    <Typography  align="center" sx={{ width: '100%', px: 2 }}>
                        Upload CSV or paste / type in part numbers (one per line or comma-separated).
                    </Typography>
                </Stack>
            </CenteredContainer>
        </HFCenteredLayout>
    )
    await new Promise(() => {});
})