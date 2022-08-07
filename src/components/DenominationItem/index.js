// Write your code here
import './index.css'

const DenominationItems = props => {
  const {onDebit, denominations} = props
  const {value} = denominations
  const debitAmmount = () => {
    onDebit(value)
  }
  return (
    <li>
      <div>
        <button className="btn" type="button" onClick={debitAmmount}>
          {value}
        </button>
      </div>
    </li>
  )
}
export default DenominationItems
