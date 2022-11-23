import React from 'react'
import { Button } from 'react-bootstrap'
import { appThemes } from '../utils/constants'

export const Toggle = ({
  theme,
  toggleTheme,
}: {
  theme: any
  toggleTheme: any
}) => {
  return (
    <div className="theme-toggle-button">
      <Button onClick={toggleTheme}>
        {theme === appThemes.LIGHT_THEME ? (
          <span>
            <i className="bi bi-moon-stars-fill"></i>
          </span>
        ) : (
          <span>
            <i className="bi bi-brightness-high-fill"></i>
          </span>
        )}
      </Button>
    </div>
  )
}
