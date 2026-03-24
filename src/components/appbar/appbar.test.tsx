import {test} from "vitest";
import {render} from "@testing-library/react";
import {UIAppBar} from "./appbar";

test('should load and display server-side data', async () => {


    render(<UIAppBar  />)
    await new Promise(() => {});
})