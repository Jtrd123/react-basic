import React, { useState } from "react"

const Bmi = () => {
  const [height, setHeight] = useState<number>(0)
  const [weight, setWeight] = useState<number>(0)
  const [bmi, setBmi] = useState<number>(0)

  const subMitted = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    const bmi = weight / ((height / 100) ** 2)
    console.log(bmi)
  }

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(event.target.value))
    console.log(height)
  }

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(event.target.value))
    console.log(weight)
    setBmi(bmi)
  }

  return (
    <div>
      <form onSubmit={subMitted}>
        <input onChange={handleHeightChange} type="number" id="height" />
        <input onChange={handleWeightChange} type="number" id="weight" />
        <input type="submit" value="คำนวณ BMI" />
      </form>
      <h1>BMI: {bmi}</h1>
    </div>
  )
}
export default Bmi