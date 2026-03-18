import {render} from '@testing-library/react'
import { test } from 'vitest'
import {HeaderFooterLayout} from "./header_footer_layout";
import {CenteredContainer} from "../../components/centered_container/centered_container";

test('should load and display server-side data', async () => {
    render(<HeaderFooterLayout>
            <CenteredContainer>
                <div></div>
            </CenteredContainer>
        </HeaderFooterLayout>)
    await new Promise(() => {});
})