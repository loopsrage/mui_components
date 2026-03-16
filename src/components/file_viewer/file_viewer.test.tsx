import {test} from "vitest";
import {render} from "@testing-library/react";
import {DataViewer} from "./file_viewer";

test('should load and display server-side data', async () => {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<DataViewer />)
    await new Promise(() => {});
})