import React, { Component } from 'react'

import {
  MLAlert,
  MLTable,
  MLButton,
  MLIcon,
  MLDatePicker,
  MLLayout,
  MLSlider,
  MLConfigProvider,
} from '@marklogic/design-system'

import {
  Route,
  CheckCircleFilled,
} from '@marklogic/design-system/MLIcon'

const configValues = {
  dateFormat: 'YYYY-MMM-DD', // Default for all dates, and DatePicker
  dateTimeFormat: 'YYYY-MMM-DD, HH:mm:ss', // default for all dates with times, and DatePicker with times
  monthFormat: 'YYYY-MM', // default for Month picker
  weekFormat: 'YYYY-wo', // default for Week picker
  yearFormat: 'YYYY', // default for Year picker
}

export default class App extends Component {
  render() {
    return (
      <div>
        <MLConfigProvider {...configValues}>
          <MLLayout>
            <MLLayout.MLHeader>Header</MLLayout.MLHeader>
            <MLLayout.MLContent>
              <MLAlert message='alert text' />
              <MLButton type='primary'>Test</MLButton>
              <MLButton type='highlight'>Test</MLButton>
              <Route />
              <MLIcon.CheckCircleFilled />
              <CheckCircleFilled />
              <div>
                <MLSlider tooltipPlacement='top' />
              </div>
              <MLDatePicker />
            </MLLayout.MLContent>
            <MLDatePicker picker='week' />
            <MLLayout.MLFooter year='2019' />
          </MLLayout>
        </MLConfigProvider>
      </div>
    )
  }
}
