import {test} from "vitest";
import {render} from "@testing-library/react";
import {ApiButton} from "./button";

test('should load and display server-side data', async () => {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<ApiButton />)
    await new Promise(() => {});
})