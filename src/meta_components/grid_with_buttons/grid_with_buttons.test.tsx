import {render} from '@testing-library/react'
import { test } from 'vitest'
import {Api} from "../../utility/api";
import {GridWithButtons} from "./grid_with_buttons";
import {Button} from "@mui/material";

test('should load and display server-side data', async () => {

    const mockApi = Api({endpoint: "http://localhost:8000"})

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<GridWithButtons api={mockApi} grid_endpoint={"list"} endpoints={["trigger"]} buttons={[
        <Button>Test1</Button>,
        <Button>Test2</Button>,
    ]}/>)
    await new Promise(() => {});
})