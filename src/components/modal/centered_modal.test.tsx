import {test} from "vitest";
import {render} from "@testing-library/react";
import {CenteredConfirmCancelModal} from "./centered_modal";

test('should load and display server-side data', async () => {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<CenteredModal />)
    await new Promise(() => {});
})

test('should load and display server-side data', async () => {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<CenteredConfirmCancelModal />)
    await new Promise(() => {});
})