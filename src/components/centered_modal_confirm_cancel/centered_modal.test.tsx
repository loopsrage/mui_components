import {test} from "vitest";
import {render} from "@testing-library/react";
import {CenteredConfirmCancelModal} from "./centered_confirm_cancel_modal";


test('should load and display server-side data', async () => {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<CenteredConfirmCancelModal  title={"test 2"} show={true} footer={(<div>test</div>)}>
        <div>body 2</div>
    </CenteredConfirmCancelModal>)
    await new Promise(() => {});
})