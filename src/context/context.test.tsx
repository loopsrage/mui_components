import { render } from '@testing-library/react';
import {RefProvider} from "./context";
import {useRefIndex} from "./context_index";
import { test } from 'vitest'

const TargetComponent = () => {
    const context = useRefIndex();
    return <input data-testid="my-input" ref={(el) => context?.register('search', el)} />;
};

// Component that pulls from the index
const ControllerComponent = () => {
    const context = useRefIndex();
    const handleClick = () => {
        const input = context?.get<HTMLInputElement>('search');

        if (input) {
            input.value = 'Ref Success!';
        }
    };
    return <button onClick={handleClick}>Update Ref</button>;
};

test('successfully registers and retrieves a DOM ref across components', async () => {
    render(
        <RefProvider>
            <TargetComponent />
            <ControllerComponent />
        </RefProvider>
    );
    await new Promise(() => {});
});

