import React from 'react'

import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      {/*START theFinancials.com Content*/}
      {/*copyright theFinancials.com - All Rights Reserved*/}
      {/*Get Help by Calling 1.843.886.3635*/}
      {/*specify 'bgcolor', 'fontcolor' and 'bordercolor' using 3- or 6-character color codes - DO NOT include '#' in the color codes*/}
      {/*use 'numtileswide=1' to display the widget vertically, 'numtileswide=0' to display it horizontally, or use another value for other layouts*/}
      {/*set 'scrollSpeedFromZeroToTen' to 0 to disable scrolling, or use value from 1 (slow) to 10 (fast) to control scroll speed*/}

      {/*END theFinancials.com Content*/}

      <Routes />
      {/* <div className="tradingview-widget-container" id="int-rates">
        <div className="tradingview-widget-container__widget" />
        <div className="tradingview-widget-copyright">
          <a href="https://www.tradingview.com" rel="noopener" target="blank">
            <span className="blue-text">Ticker Tape</span>
          </a>{' '}
          by TradingView
        </div>
      </div> */}
    </div>
  )
}

export default App
