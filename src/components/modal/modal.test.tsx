import { test } from 'vitest';
import {TypeFormBuilderModal} from "./modal";
import {render} from "@testing-library/react";
import {Api} from "../../utility/api";


test('should load and display server-side data', async () => {
    const mockApi = Api({endpoint: "http://localhost:8000/"})

    const handleApiCall = async () => {
        const result = await mockApi.at("count_column")
        return result
    }

    render(<TypeFormBuilderModal
        title={"test"}
        getSchema={handleApiCall}
        handleSave={(data) => {
             console.log(data)
        }} />)

    await new Promise(() => {});
})