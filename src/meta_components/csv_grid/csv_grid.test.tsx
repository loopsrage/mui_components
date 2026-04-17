import {test} from "vitest";
import {Api} from "@/utility/api";
import {render} from "@testing-library/react";
import {CsvGrid} from "@/meta_components/csv_grid/csv_grid";

test('should load and display server-side data', async () => {

    const mockApi = Api({endpoint: "http://localhost:8000"})

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(<CsvGrid api={mockApi} grid_endpoint={"get_paginated"} />)
    await new Promise(() => {});
})