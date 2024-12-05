function Car(props) {
  const { car } = props
  const { brand, year } = car;
  const text = `I'm a ${brand} car producted on ${year}`
  return (
    <>
      {
        brand!== undefined && year!==undefined?
        <h2>{text}</h2> : null
      }
    </>
  )
}
export default Car;