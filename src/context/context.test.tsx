import { render } from '@testing-library/react';
import {RefProvider} from "./context";
import {useRefIndex} from "./context_index";
import { test } from 'vitest'

const TargetComponent = () => {
    const { register } = useRefIndex();
    return <input data-testid="my-input" ref={(el) => register('search', el)} />;
};

// Component that pulls from the index
const ControllerComponent = () => {
    const { get } = useRefIndex();

    const handleClick = () => {
        const input = get<HTMLInputElement>('search');

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

