import Car from "./Car";
import Virat from "./Virat";

function Hello() {
  const carInfo={brand:'toyota', year:2020}
    return (
      <>
        <h1>Hello! It's my first react app </h1>
        <Car car={carInfo}/>
        <Virat/>
      </>
    )
  }
  export default Hello;