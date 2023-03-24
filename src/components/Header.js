import classes from "./Header.module.css"

function Header(props) {
  return (
    <nav className={classes.box}>
      <div className={classes.name}>
        <span>Конвертер валют</span>
      </div>
      <div className={classes.currencyBox}>
        {props.currency.slice(1).map((item) => (
          <div className={classes.currency} key={item.name}>
            <span>{item.name}:</span>
            <span>{parseFloat(item.rate).toFixed(1)}</span>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Header
