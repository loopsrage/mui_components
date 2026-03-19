import {render} from '@testing-library/react'
import { test } from 'vitest'
import {HFCenteredLayout} from "./hf_centered";
import {GridWithButtons} from "../grid_with_buttons/grid_with_buttons";
import {Api} from "../../utility/api";
import {Button, Paper, Typography} from "@mui/material";
import {UIInput} from "../../components/upload_input/upload_input";
import {CenteredContainer} from "../../components/centered_container/centered_container";

test('should load and display server-side data', async () => {
    const mockApi = Api({endpoint: "http://localhost:8000"})

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
            <UIInput />
        </CenteredContainer>
        <CenteredContainer sx={{minHeight: "10hv"}}>
            <Paper>
                <GridWithButtons title={"Review Classifications"} api={mockApi} grid_endpoint={"training"}
                                 buttons={[(<Button>Test21</Button>), (<Button>13414</Button>)]}
                                 row_details={true} refKey={"test_grid"} register_component={true} />
            </Paper>
        </CenteredContainer>
    </HFCenteredLayout>)
    await new Promise(() => {});
})