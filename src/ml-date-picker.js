import React from 'react'
import PropTypes from 'prop-types'
import { get, isArray } from 'lodash-es'
import { DatePicker } from 'antd'
import { MLConfigContext } from './ml-config-provider'
import './ml-date-picker.less'
const { RangePicker } = DatePicker

const pickerPropsFromContext = ({ dateFormat, dateTimeFormat, weekFormat, monthFormat }, props) => {
  let format
  let showTime = props.showTime
  if (props.showTime === true) {
    // Use the first dateTimeFormat if multiple are provided, because TimePicker chokes on arrays of formats
    format = isArray(dateTimeFormat) ? dateTimeFormat[0] : dateTimeFormat
  } else {
    format = get({
      week: weekFormat,
      month: monthFormat,
      // Nothing special for quarter or year pickers
    }, props.picker, dateFormat)
  }
  return { format, showTime }
}

const MLDatePicker = (props) => {
  return (
    <MLConfigContext.Consumer>
      {(context) => {
        const contextProps = pickerPropsFromContext(context, props)
        return (
          <DatePicker format={contextProps.format} {...props} showTime={contextProps.showTime}>
            {props.children}
          </DatePicker>
        )
      }}
    </MLConfigContext.Consumer>
  )
}

MLDatePicker.defaultProps = {
  bordered: true,
  size: 'small',
}

MLDatePicker.propTypes = {
  bordered: PropTypes.bool,
  size: PropTypes.string,
}

const MLRangePicker = (props) => {
  return (
    <MLConfigContext.Consumer>
      {(context) => {
        return (
          <RangePicker {...pickerPropsFromContext(context, props)} {...props}>
            {props.children}
          </RangePicker>
        )
      }}
    </MLConfigContext.Consumer>
  )
}

MLRangePicker.defaultProps = {
  bordered: true,
  placeholder: ['Start', 'End'],
  separator: (
    <span className='ant-picker-separator'>–</span> // en-dash
  ),
  size: 'small',
}

MLRangePicker.propTypes = {
  bordered: PropTypes.bool,
  placeholder: PropTypes.array,
  separator: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  size: PropTypes.string,
}

MLDatePicker.MLRangePicker = MLRangePicker

export default MLDatePicker
