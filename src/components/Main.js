import { useState } from "react"
import classes from "./Main.module.css"

function Main({ currency }) {
  const [input, setInput] = useState(0)
  const [output, setOutput] = useState(0)

  const [firstSelectedCurrency, setFirstSelectedCurrency] = useState("UAH")
  const [secondSelectedCurrency, setSecondSelectedCurrency] = useState("USD")

  const firstCurrencyHanlder = (event) => {
    setFirstSelectedCurrency(event.target.value)

    setOutput(
      parseFloat(
        input *
          (currency.find((data) => data.name === event.target.value).rate /
            currency.find((data) => data.name === secondSelectedCurrency).rate)
      ).toFixed(2)
    )
  }

  const secondCurrencyHandler = (event) => {
    setSecondSelectedCurrency(event.target.value)

    setOutput(
      parseFloat(
        input /
          (currency.find((data) => data.name === event.target.value).rate /
            currency.find((data) => data.name === firstSelectedCurrency).rate)
      ).toFixed(2)
    )
  }

  const inputHandler = (event) => {
    setOutput(
      parseFloat(
        event.target.value /
          currency.find((data) => data.name === secondSelectedCurrency).rate /
          currency.find((data) => data.name === firstSelectedCurrency).rate
      ).toFixed(2)
    )
    setInput(event.target.value)
  }

  const outputHandler = (event) => {
    setInput(
      parseFloat(
        event.target.value *
          parseInt(
            currency.find((data) => data.name === secondSelectedCurrency).rate /
              currency.find((data) => data.name === firstSelectedCurrency).rate
          )
      ).toFixed(2)
    )
    setOutput(event.target.value)
  }

  return (
    <main className={classes.box}>
      <div className={classes.info}>
        <div className={classes.currencyBox}>
          {/* input */}
          <div className={classes.inputBox}>
            <label className={classes.text} htmlFor="inputCurrency">
              Я маю
            </label>
            <input
              type="number"
              min={0}
              value={input}
              onChange={inputHandler}
              name="inputCurrency"
              id="inputCurrency"
              className={classes.input}
            />
          </div>

          {/* select currency */}
          <div>
            <select
              value={firstSelectedCurrency}
              onChange={firstCurrencyHanlder}
              className={classes.select}
            >
              <option value={"UAH"}>UAH</option>
              <option value={"USD"}>USD</option>
              <option value={"EUR"}>EUR</option>
            </select>
          </div>
        </div>

        <div className={classes.currencyBox}>
          {/* input */}
          <div className={classes.inputBox}>
            <label className={classes.text} htmlFor="outputCurrency">
              Я отримаю
            </label>
            <input
              type="number"
              min={0}
              value={output}
              onChange={outputHandler}
              name="outputCurrency"
              id="outputCurrency"
              className={classes.input}
            />
          </div>

          {/* select currency */}
          <div>
            <select
              value={secondSelectedCurrency}
              onChange={secondCurrencyHandler}
              className={classes.select}
            >
              <option value={"UAH"}>UAH</option>
              <option value={"USD"}>USD</option>
              <option value={"EUR"}>EUR</option>
            </select>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
