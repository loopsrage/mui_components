import {DataViewer} from "./file_viewer";
import {render} from "@testing-library/react";
import { test, vi } from 'vitest';

test('should load and display server-side data', async () => {

    const mockProps = {
        fileData: "Hello World", // Raw text string
        subtype: 1,              // Read-only mode
        inputProps: {
            name: "test-editor",
            onChange: vi.fn()
        }
    };

    render(<DataViewer {...mockProps} />)
    await new Promise(() => {});
})
