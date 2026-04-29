import { render} from '@testing-library/react'
import {  test } from 'vitest';
import {GetProgressValue, SetProgressValue, UIInput, type UploadInputState} from "./upload_input";
import {RefProvider} from "@/context/context";
import type {RefObject} from "react";

test('should load and display server-side data', async () => {

    const onDropSuccess = (ref: RefObject<UploadInputState>, acceptedFiles: File[]) => {
        const intervalId = setInterval(() => {
            const current = GetProgressValue(ref)
            if (current >= 100) {
                clearInterval(intervalId);
            } else{
                console.log(current)
                SetProgressValue(ref, current+1)
            }
        }, 100);
        Object.keys(acceptedFiles).forEach(acceptedFile => {console.log(acceptedFile)})
    }

    render(
        <RefProvider>
            <UIInput
                refKey={"test_input"}
                register_component={true}
                onDropSuccess={onDropSuccess}
                onSend={() => (ref: RefObject<UploadInputState>) => {console.log(ref.current)}} />
        </RefProvider>
    );

    await new Promise(() => {});
})