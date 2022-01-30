import React, { FunctionComponent, useState } from 'react'
import shallow from 'zustand/shallow'
import SVGIcon from 'components/Icon/SVGIcon'
import useStore from 'lib/store'
import { nodeIsUpAndRunning } from 'lib/storeUtils'
import { classNamesLib } from 'components/ClassNames/ClassNames'
import { isMobile } from 'react-device-detect'
import SettingsDialog from 'components/Dialog/SettingsDialog'
import BasePopover from './BasePopover'

const SettingsPopover: FunctionComponent = () => {
  const [ contract ] = useStore(
    (state) => [state.contract],
    shallow
  )

  const [openSettingsDialog, setOpenSettingsDialog] = useState(false)

  const [isDarkmode, setIsDarkmode] = useStore((state) => [
    state.isDarkmode,
    state.setIsDarkmode,
  ])

  const toggleDarkMode = (): void => {
    if (isDarkmode) {
      setIsDarkmode(false)
    } else {
      setIsDarkmode(true)
    }
  }

  return (
    <>
      <BasePopover
        popoverButton={
          <span className='cursor-pointer ml-5 text-white text-lg'>
            <SVGIcon icon='faCog' />
          </span>
        }
        popoverPanel={
          <div
            className={`${classNamesLib.popoverWrapper} ${classNamesLib.popoverWrapperDark}`}
          >
            <div className={`${classNamesLib.popoverBody}`}>
              <button
                type='button'
                onClick={() => setOpenSettingsDialog(true)}
                className={`${classNamesLib.popoverBodyButton} ${classNamesLib.popoverBodyButtonDark}`}
              >
                <SVGIcon icon='faCog' />
                <span>Node Settings</span>
                {!nodeIsUpAndRunning(contract) && (
                  <SVGIcon
                    icon='faExclamationTriangle'
                    className='fixed right-4 animate-pulse text-red-500'
                  />
                )}
              </button>

              {isMobile && (
                <button
                  type='button'
                  onClick={toggleDarkMode}
                  className={`${classNamesLib.popoverBodyButton} ${classNamesLib.popoverBodyButtonDark}`}
                >
                  {isDarkmode && (
                    <>
                      <SVGIcon icon='faSun' isFixed />
                      <span>Lightmode</span>
                    </>
                  )}
                  {!isDarkmode && (
                    <>
                      <SVGIcon icon='faMoon' isFixed />
                      <span>Darkmode</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        }
      />
      <SettingsDialog
        showDialog={openSettingsDialog}
        onClose={() => setOpenSettingsDialog(false)}
      />
    </>
  )
}

export default SettingsPopover
