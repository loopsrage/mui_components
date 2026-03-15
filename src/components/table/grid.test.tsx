import { UITable} from "./grid";
import {FetchApi} from "../../utility/fetchapi";
import {render} from '@testing-library/react'
import { test } from 'vitest'

test('should load and display server-side data', async () => {

    const mockApi = FetchApi("http://localhost:8000/source")

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<UITable api={mockApi} />)
    await new Promise(() => {});
})