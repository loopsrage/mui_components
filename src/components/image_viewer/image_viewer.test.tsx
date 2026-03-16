import {test} from "vitest";
import {render} from "@testing-library/react";
import {DataImage} from "./image_viewer";

test('should load and display server-side data', async () => {

    render(<DataImage
        encoding="png"
        alt="Red Square Test"
        data={"H4sIAOZjuGkC/+sM8HPn5ZLiYmBg4PX0cAkC0iA2FwcTkGQKiHgFpIQ8XRxDKuYk/znfwG/wcKrsxksMjjqMwhu5ioWBsgyern4u65wSmgD75cG4SwAAAA==\n"}
    />)
    await new Promise(() => {});
})