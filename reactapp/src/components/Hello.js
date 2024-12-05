import Car from "./Car";
import Virat from "./Virat";

function Hello() {
  // const carInfo = { brand: 'toyota', year: 2020 }
  const carInfo = { brand: 'toyota', year: 2020 }
  const appleInfo = { type: "Kasmir", color: "Red" }
  // const brand!==undefined
  const carList = [
    { brand: "BMW", year: 2020 },
    { brand: "Ford", year: 2020 },
    { brand: "Tesla", year: 2020 },
  ]
  const numberList = [
    1, 2, 3, 4, 5, 6, 7
  ]
  return (
    <>
      <h1>Hello! It's my first react app </h1>
      {
        carInfo.brand !== undefined && carInfo.year !== undefined ?
          <Car car={carInfo} /> : null
      }
      <Virat apple={appleInfo} />
      <ul>
        {carList.map((carInfo) => <li key={carInfo.brand}><Car car={carInfo} /></li>)}
      </ul>
      <ul>
        {numberList.map((e,index)=> <p key={index}>{e}</p>)}
      </ul>
    </>
  )
}
export default Hello;