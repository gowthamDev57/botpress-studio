import React, { Fragment } from 'react'
import { Icon, IconName, Tooltip } from '@blueprintjs/core'

const Header = () => {
  const rightButtons = [
    {
      divider: false,
      icon: 'user' as IconName,
      label: 'Profile',
      onClick: () => console.log('Profile clicked'),
      tooltip: 'Go to Profile'
    },
    {
      divider: true,
      icon: 'settings' as IconName,
      label: 'Settings',
      onClick: () => console.log('Settings clicked'),
      tooltip: 'Open Settings'
    }
  ]

  const leftButtons = [
    {
      divider: false,
      icon: 'home' as IconName,
      label: 'Home',
      onClick: () => console.log('Home clicked'),
      tooltip: 'Go to Home'
    },
    {
      divider: true,
      icon: 'notifications' as IconName,
      label: 'Notifications',
      onClick: () => console.log('Notifications clicked'),
      tooltip: 'View Notifications'
    }
  ]

  return (
    <Fragment>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
          padding: '16px',
          borderBottom: '1px solid #ddd'
        }}
      >
        {!!rightButtons.length && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {rightButtons.map(({ divider, icon, label, onClick, tooltip }, index) => (
              <Fragment key={index}>
                {divider && (
                  <span
                    style={{
                      width: '1px',
                      height: '24px',
                      backgroundColor: '#ddd',
                      margin: '0 8px'
                    }}
                  ></span>
                )}
                <Tooltip content={tooltip}>
                  <button
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '8px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    onClick={onClick}
                  >
                    <Icon color="#8b5cff" icon={icon} iconSize={16} />
                    {label && <span style={{ marginLeft: '8px', color: '#333' }}>{label}</span>}
                  </button>
                </Tooltip>
              </Fragment>
            ))}
          </div>
        )}
        {!!leftButtons.length && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {leftButtons.map(({ divider, icon, label, onClick, tooltip }, index) => (
              <Fragment key={index}>
                {divider && (
                  <span
                    style={{
                      width: '1px',
                      height: '24px',
                      backgroundColor: '#ddd',
                      margin: '0 8px'
                    }}
                  ></span>
                )}
                <Tooltip content={tooltip}>
                  <button
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '8px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    onClick={onClick}
                  >
                    <Icon color="#8b5cff" icon={icon} iconSize={16} />
                    {label && <span style={{ marginLeft: '8px', color: '#333' }}>{label}</span>}
                  </button>
                </Tooltip>
              </Fragment>
            ))}
          </div>
        )}
      </header>
      <div
        style={{
          padding: '16px',
          backgroundColor: '#f9f9f9',
          borderTop: '1px solid #ddd'
        }}
      >
        Static Content or Dynamic Components Go Here
      </div>
    </Fragment>
  )
}

export default Header
