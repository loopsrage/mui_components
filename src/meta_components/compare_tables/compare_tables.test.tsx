import {render} from '@testing-library/react'
import { test } from 'vitest'
import {Api} from "@/utility/api";
import {CompareTables} from "@/meta_components/compare_tables/compare_tables";
import {Stack} from "@mui/material";
import {UITable} from "@/components/grid/grid";
import {RefProvider} from "@/context/context";

test('should load and display server-side data', async () => {

    const mockApi = Api({endpoint: "http://localhost:8000"})
    const TestWrapper = () => {
        const tables = [
            {
                table: UITable,
                props: {
                    api: mockApi,
                    endpoint: "list",
                    refKey: "table1",
                    register_component: true,
                    toolbar: true,
                    checkbox_select: true,
                    title: "table_1",
                }
            },
            {
                table: UITable,
                props: {
                    toolbar: true,
                    checkbox_select: true,
                    api: mockApi,
                    endpoint: "source",
                    refKey: "table3",
                    register_component: true,
                    title: "table_3",
                }
            }
        ]
        const compareFunc = async (state: Record<string, string>) => {
            const result = await mockApi.at("/compare", {
                fetchParams: {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({data: state}),
                },
            })
            console.log(result)
        }

        return <Stack direction={"row"}>
                <CompareTables tables={tables} compare={compareFunc} />
            </Stack>
    }

    render(
        <RefProvider>
           <TestWrapper/>
        </RefProvider>
    )
    await new Promise(() => {});
})