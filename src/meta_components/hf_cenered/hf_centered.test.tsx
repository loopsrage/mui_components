import {render} from '@testing-library/react'
import { test } from 'vitest'
import {HFCenteredLayout} from "./hf_centered";
import {GridWithButtons} from "../grid_with_buttons/grid_with_buttons";
import {Api} from "@/utility/api";
import {Button, Paper, Stack, Typography} from "@mui/material";
import {
    GetProgressValue,
    SetProgressValue,
    UIInput,
    type UploadInputState
} from "@/components/upload_input/upload_input";
import {CenteredContainer} from "@/components/centered_container/centered_container";
import SendIcon from "@mui/icons-material/Send";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import type {RefObject} from "react";
import {ApiButton} from "@/components/button/button";
import RefreshIcon from '@mui/icons-material/Refresh';

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
    const buttons = [     (
        <ApiButton
            variant={"outlined"}
            startIcon={<SaveAltIcon/>}
            api={mockApi}
            endpoint={""}
            sx={{
                backgroundColor: 'darkgray',
                width: 'fit-content',
                borderColor: 'black',
                color: 'white',
                '&:hover': {
                    backgroundColor: 'black',
                },
            }}
            // callback={csvCallback}
        >
            {"CSV"}
        </ApiButton>
    ),
    (
        <ApiButton
            variant={"outlined"}
           startIcon={<SendIcon/>}
           api={mockApi}
           endpoint={""}
           sx={{
               backgroundColor: 'darkgray',
               width: 'fit-content',
               borderColor: 'black',
               color: 'white',
               '&:hover': {
                   backgroundColor: 'black',
               },
           }}
        // callback={otmCallback}
        >
            {"Send To OTM/GTM"}
        </ApiButton>
    )]
    const handleOnSend = (ref: RefObject<UploadInputState>) => {
        return async () => {
            const result = await mockApi.at("/upload", {fetchParams: {method: "POST"},args: {
                item_ids: [1,2,3,4,6],
            }})
            console.log(result, ref.current)
        }
    }

    render(
        <HFCenteredLayout>
            <CenteredContainer sx={{minHeight: "10hv", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Stack gap={3} alignItems={"center"}>
                    <Typography   align="center" sx={{ fontWeight: 'bold', width: '100%'}} >
                       Default
                    </Typography>
                    <Typography  align="center" sx={{ width: '100%' }}>
                        Default
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: 'darkred',
                            width: 'fit-content',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'black',
                            },
                        }}
                        startIcon={<RefreshIcon />}>Start Over</Button>
                    <UIInput onSend={handleOnSend} refKey={"csv_upload"} register_component={true} onDropSuccess={onDropSuccess} />
                    <Paper>
                        <GridWithButtons
                            title={"Default"}
                            api={mockApi}
                            buttons={buttons}
                            row_details={true}
                            refKey={"test_grid"}
                            register_component={true} endpoint={"list"} />
                    </Paper>

                    <Typography  align="center" sx={{ width: '100%' }}>
                        Please review the part details file and approve / reject
                    </Typography>
                </Stack>
            </CenteredContainer>
        </HFCenteredLayout>
    )
    await new Promise(() => {});
})