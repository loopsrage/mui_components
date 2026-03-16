import {test} from "vitest";
import {render} from "@testing-library/react";
import { CenteredModal} from "./centered_modal";

test('should load and display server-side data', async () => {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<CenteredModal title={"test"} show={true} footer={(<div>test</div>)} >
            <div>body</div>
        </CenteredModal>)
    await new Promise(() => {});
})
