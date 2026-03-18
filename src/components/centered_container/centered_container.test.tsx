import {test} from "vitest";
import {render} from "@testing-library/react";
import {CenteredContainer} from "./centered_container";

test('should load and display server-side data', async () => {

    render(<CenteredContainer content={<div>test</div>}/>)
    await new Promise(() => {});
})
