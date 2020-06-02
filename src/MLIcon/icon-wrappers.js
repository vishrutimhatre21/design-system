import React from 'react'
import Icon from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { pascalCase } from 'change-case'
import classNames from 'classnames'

export function MLIconWrapper({ highlight, color, displayName, component, ...props }) {
  let className = classNames(props.className, 'ml-icon')
  if (highlight) {
    className = classNames(className, 'ml-icon-highlight')
  }
  if (/Outlined$/.test(displayName)) {
    className = classNames(className, 'ml-icon-outlined')
  }
  if (/Filled$/.test(displayName)) {
    className = classNames(className, 'ml-icon-filled')
  }
  if (/TwoTone$/.test(displayName)) {
    className = classNames(className, 'ml-icon-two-toned')
  }
  className = className.replace('^ +', '')
  return React.createElement(component, Object.assign({}, props, { className }))
}

export const createWrappedMLIcon = (component) => {
  const displayName = component.displayName || component.render.displayName // go through render if it's a forwardRef object
  const wrappedComponent = (props) => {
    return (<MLIconWrapper {...props} displayName={displayName} component={component} />)
  }
  wrappedComponent.displayName = pascalCase(displayName)
  // TODO: Consider using React.forwardRef here like Ant does
  return wrappedComponent
}

export const wrapFontAwesomeIcon = (faIcon) => {
  const componentFn = (props) => {
    return (
      <Icon
        {...props}
        component={(props) => (
          <FontAwesomeIcon icon={faIcon} {...props} />
        )}
      />
    )
  }
  componentFn.displayName = faIcon.iconName
  return createWrappedMLIcon(componentFn)
}
