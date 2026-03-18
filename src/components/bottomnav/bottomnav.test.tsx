import {test} from "vitest";
import {render} from "@testing-library/react";
import {UIBottomNav} from "./bottomnav";

test('should load and display server-side data', async () => {

    render(<UIBottomNav />)
    await new Promise(() => {});
})