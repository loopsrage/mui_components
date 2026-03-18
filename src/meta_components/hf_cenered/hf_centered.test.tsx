import {render} from '@testing-library/react'
import { test } from 'vitest'
import {HFCenteredLayout} from "./hf_centered";

test('should load and display server-side data', async () => {
    render(<HFCenteredLayout />)
    await new Promise(() => {});
})