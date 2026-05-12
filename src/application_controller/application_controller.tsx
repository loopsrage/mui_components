import {type FC, type ReactElement, useLayoutEffect, useRef, useState} from 'react'
import { useConditionalRef} from "components";

export interface AppControllerState {
  active?: ReactElement
  setActive: (activate: ReactElement) => void
}

export interface AppControllerParams {
    defaultApp: ReactElement
}

export const AppController: FC<AppControllerParams> = ({defaultApp}) => {
  const registry = useConditionalRef("app_ctrl", true)
  const [active, setActive] = useState<ReactElement | undefined>(defaultApp)
  const handleSetActive = (activate: ReactElement) => {
    setActive(activate)
  }
  const localRef = useRef<AppControllerState>({
    active: defaultApp,
    setActive: handleSetActive,
  })

  useLayoutEffect(() => {
    registry(localRef)
    return () => registry(null)
  }, [registry]);
  return active
}
