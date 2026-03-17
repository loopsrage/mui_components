import {render} from '@testing-library/react'
import { test } from 'vitest'
import {UIInput} from "./upload_input";

test('should load and display server-side data', async () => {



    render(<UIInput />)
    await new Promise(() => {});
})