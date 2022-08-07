// Write your code here
import {Component} from 'react'

import DenominationItems from '../DenominationItem'

import './index.css'

class CashWithdral extends Component {
  state = {balance: 2000}

  onDebit = ammount => {
    this.setState(prevState => ({
      balance: prevState.balance - ammount,
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    let isTrue
    if (balance > 0) {
      isTrue = true
    } else {
      isTrue = false
    }

    return (
      <div className="bg">
        <div className="card">
          <div className="user">
            <div className="profile-logo">
              <p className="logo">S</p>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-card">
            <p className="balance">Your Balance</p>
            <div>
              <p className="bal-amt">{isTrue ? balance : 0}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-card">
            <p className="withdraw-text">Withdraw</p>
            <p className="withdraw-para">CHOOSE SUM (IN RUPEES)</p>
            <ul className="btn-container">
              {denominationsList.map(each => (
                <DenominationItems
                  onDebit={this.onDebit}
                  denominations={each}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdral
