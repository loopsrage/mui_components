import {render} from '@testing-library/react'
import { test } from 'vitest'
import {HFCenteredLayout} from "./hf_centered";
import {GridWithButtons} from "../grid_with_buttons/grid_with_buttons";
import {Api} from "../../utility/api";
import {Button} from "@mui/material";

test('should load and display server-side data', async () => {
    const mockApi = Api({endpoint: "http://localhost:8000"})

    render(<HFCenteredLayout>
        <GridWithButtons title={"TITLE TEST"} api={mockApi} grid_endpoint={"list"}
                         buttons={[(<Button>Test21</Button>), (<Button>13414</Button>)]}
                         ref_key={"test_grid"}
                         row_details={true} />
    </HFCenteredLayout>)
    await new Promise(() => {});
})