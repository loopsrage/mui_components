import {test} from "vitest";
import {render} from "@testing-library/react";
import {Api, RefProvider} from "components";
import {VectorSearch} from "./vector_search";

test("test", async () => {
    const mockApi = Api({endpoint: "http://localhost:8000/storage"})
    render(
        <RefProvider>
            <VectorSearch endpoint={"vector_query"} api={mockApi} />
        </RefProvider>
    )
    await new Promise((() => {}))
})