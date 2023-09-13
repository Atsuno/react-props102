import { PropsData } from '../App'

const Detail: React.FC<PropsData['detail']> = ({
  price,
  bathrooms,
  bedrooms,
  garage,
}) => {
  const thaiBaht = new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
  }).format(price)

  return (
    <ul className="detail">
      <li>
        <b>Price: </b>
        {`${thaiBaht}`}
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
        {garage} {garage > 1 ? 'cars' : 'car'}
      </li>
    </ul>
  )
}

export default Detail
