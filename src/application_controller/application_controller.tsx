import {type FC, type ReactElement, useEffect, useLayoutEffect, useRef, useState} from 'react'
import {type AppBarState, useConditionalRef, useRefIndex} from "components";
import {IconButton} from "@mui/material";
import BugReportIcon from '@mui/icons-material/BugReport';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

export interface AppControllerState {
  active?: ReactElement
  setActive: (activate: ReactElement) => void
}

export interface AppControllerParams {
    defaultApp: ReactElement
}

export const AppController: FC<AppControllerParams> = ({defaultApp}) => {
  const context = useRefIndex();
  const registry = useConditionalRef("app_ctrl", true)
  const [active, setActive] = useState<ReactElement | undefined>(defaultApp)
  const handleSetActive = (activate: ReactElement) => {
    setActive(activate)
  }
  const localRef = useRef<AppControllerState>({
    active: defaultApp,
    setActive: handleSetActive,
  })

  useEffect(() => {
    const appbarRef = context?.get("appbar") as AppBarState
    if (!appbarRef) return

    appbarRef.register_element({
      "home": (
          <IconButton
              size="small"
              sx={{ color: 'white' }}
              onClick={() => setActive(defaultApp)}
          >
            <HomeIcon fontSize="small" />
          </IconButton>
      ),
      "settings": (
          <IconButton
              size="small"
              sx={{ color: 'white' }}
              onClick={() => console.log("debug clicked")}
          >
            <SettingsIcon fontSize="small" />
          </IconButton>
      ),
      "debug": (
          <IconButton
              size="small"
              sx={{ color: 'white' }}
              onClick={() => console.log("debug clicked")}
          >
            <BugReportIcon fontSize="small" />
          </IconButton>
      ),
    })
  }, [context]);

  useLayoutEffect(() => {
    setActive(defaultApp)
    registry(localRef)
    return () => registry(null)
  }, [registry]);
  return active
}
