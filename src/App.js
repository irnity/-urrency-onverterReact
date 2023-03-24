import { useEffect, useState } from "react"
import "./App.css"
import Card from "./components/Card"
import Header from "./components/Header"
import Main from "./components/Main"

function App() {
  const [data, setData] = useState([])
  const [currency, setCurrency] = useState([{ name: "UAH", rate: 1 }])

  useEffect(() => {
    async function getResponce() {
      const responce = await fetch(
        "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
      )
      const data = await responce.json()

      return data
    }

    getResponce().then((data) => {
      setData(data)
    })
  }, [])

  useEffect(() => {
    const values = ["USD", "EUR"]
    const datas = data
      .filter((data) => values.includes(data.cc))
      .map((data) => ({ name: data.cc, rate: data.rate }))
    setCurrency((prevState) => [...prevState, ...datas])
  }, [data])

  return (
    <Card>
      <Header currency={currency} />

      <Main currency={currency} />
    </Card>
  )
}

export default App
