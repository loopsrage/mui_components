import { FC, ReactElement } from 'react';
export interface AppControllerState {
    active?: ReactElement;
    setActive: (activate: ReactElement) => void;
}
export interface AppControllerParams {
    defaultApp: ReactElement;
}
export declare const AppController: FC<AppControllerParams>;
//# sourceMappingURL=application_controller.d.ts.map