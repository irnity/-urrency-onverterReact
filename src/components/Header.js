import classes from "./Header.module.css"

function Header(props) {
  return (
    <nav className={classes.box}>
      <div className={classes.name}>
        <span>Currancy exchange</span>
      </div>
      <div className={classes.currencyBox}>
        {props.currency.map((item) => (
          <div className={classes.currency}>
            <span>{item.cc}</span>
            <span>{parseFloat(item.rate).toFixed(1)}</span>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Header
