import {render} from "@testing-library/react";
import {ApiButton} from "./button";
import {Api} from "../../utility/api";
import {test, vi } from "vitest";

test('should load and display server-side data', async () => {
    const mockApi = Api({endpoint: "http://localhost:8000"})

    render(<ApiButton api={mockApi} onClick={vi.fn()} endpoint={"count_column"}/>)
    await new Promise(() => {});
})