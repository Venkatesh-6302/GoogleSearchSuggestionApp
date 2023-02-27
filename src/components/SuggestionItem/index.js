// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInputValue} = props
  const {suggestion} = suggestionDetails

  const onClickSuggestion = () => {
    updateSearchInputValue(suggestion)
  }

  return (
    <li className="list-item">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="btn" onClick={onClickSuggestion}>
        <img
          className="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
