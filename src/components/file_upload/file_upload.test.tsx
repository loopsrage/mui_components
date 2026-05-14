import {test} from "vitest"
import {render} from "@testing-library/react"
import {Api, RefProvider} from "components";
import {FileUpload} from "./file_upload";



test("test", async () => {
    const api = Api({endpoint: "http://localhost:8000/similar"})
    const handleOnSelected = async (accepted: File[]) => {
        const promises: Promise<unknown>[] = []
        for (const file of accepted) {
            const formData = new FormData();

            formData.append("file", file)
            promises.push(api.at("/upload", {
                fetchParams: {
                    method: "POST",
                    body: formData,
                },
                inputHeaders: {"Content-Type": undefined}
            }))
        }
        const results = await Promise.all(promises)
        console.log(results)
    }
    render(
        <RefProvider>
            <FileUpload onFilesSelected={handleOnSelected} dropzone_options={{
                onDrop: handleOnSelected,
                accept: {'image/*': ['.jpeg', '.jpg', '.png'],
                    'application/pdf': ['.pdf'],
                    'text/csv': ['.csv'],
                    'application/vnd.ms-excel': ['.csv']
                },
                multiple: true
            }} />
        </RefProvider>
    )
    await new Promise((() => {}))
})