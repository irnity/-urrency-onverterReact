import classes from "./Main.module.css"

function Main() {
  return (
    <main className={classes.box}>
      <div className={classes.info}>
        <div className={classes.currencyBox}>
          {/* input */}
          <div className={classes.inputBox}>
            <label className={classes.text} htmlFor="inputCurrency">
              Input currency
            </label>
            <input
              placeholder="Write you value"
              type="number"
              min={0}
              name="inputCurrency"
              id="inputCurrency"
              className={classes.text}
            />
            <span className={classes.text}>1 UAH = 0.025USD</span>
          </div>

          {/* select currency */}
          <div>
            <select>
              <option>UAH</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
          {/*  */}
        </div>
        {/* change to oposite */}
        <div className={classes.change}>
          <button className={classes.button}>Change</button>
        </div>

        <div className={classes.currencyBox}>
          {/* input */}
          <div className={classes.inputBox}>
            <label className={classes.text} htmlFor="outputCurrency">
              Input currency
            </label>
            <input
              placeholder="Write you value"
              type="number"
              min={0}
              name="outputCurrency"
              id="outputCurrency"
              className={classes.text}
            />
            <span className={classes.text}>1 USD = 40 UAH</span>
          </div>

          {/* select currency */}
          <div>
            <select>
              <option>UAH</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
          {/*  */}
        </div>
      </div>
    </main>
  )
}

export default Main
