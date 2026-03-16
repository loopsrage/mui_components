import {render} from '@testing-library/react'
import { test } from 'vitest'
import {SelectOptions} from "./select_options";

test('should load and display server-side data', async () => {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<SelectOptions />)
    await new Promise(() => {});
})