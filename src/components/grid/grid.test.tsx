import { UITable} from "./grid";
import {render} from '@testing-library/react'
import { test } from 'vitest'
import {Api} from "../../utility/api";

test('should load and display server-side data', async () => {

    const mockApi = Api({endpoint: "http://localhost:8000/"})

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<UITable api={mockApi} endpoint={"list"}/>)
    await new Promise(() => {});
})