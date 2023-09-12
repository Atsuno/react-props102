import { PropsData } from '../App'

const Detail: React.FC<PropsData['detail']> = ({
  price,
  bathrooms,
  bedrooms,
  garage,
}) => {
  let usDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
  return (
    <ul className="detail">
      <li>
        <b>Price: </b>
        {`${usDollar}`}
      </li>
      <li>
        <b>Bedrooms: </b>
        {bedrooms}
      </li>
      <li>
        <b>Bathrooms: </b>
        {bathrooms}
      </li>
      <li>
        <b>Garage: </b>
        {garage} cars
      </li>
    </ul>
  )
}

export default Detail
