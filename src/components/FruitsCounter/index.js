// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  eatingMango = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  eatingBanana = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state

    return (
      <div className="bg">
        <div className="whiteBg">
          <h1 className="heading">
            Bob ate <span className="clrYellow">{count1}</span> Mangoes{' '}
            <span className="clrYellow">{count2}</span> bananas
          </h1>
          <div className="fruitsContainer">
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="Mango"
                className="image"
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.eatingMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="Banana"
                className="image"
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.eatingBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
