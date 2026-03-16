import {test} from "vitest";
import {render} from "@testing-library/react";
import {DataImage} from "./image_viewer";

test('should load and display server-side data', async () => {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<DataImage />)
    await new Promise(() => {});
})