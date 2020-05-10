import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'antd'
import './style'
import classNames from 'classnames'
const { Button } = Dropdown

const MLButton = (props) => {
  return (
    <Button
      {...props}
      className={classNames('ml-dropdown-button', props.className)}
    >
      {props.children}
    </Button>
  )
}

MLButton.defaultProps = {
  size: 'small',
  trigger: 'click',
}

MLButton.displayName = 'MLDropdownButton'

export default MLButton
