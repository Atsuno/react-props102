import { FC, PropsWithChildren } from 'react'
import { PropsData } from '../App'

const Property: FC<PropsData['property'] & PropsWithChildren> = ({
  name,
  img,
  children,
}) => {
  return (
    <section className="property">
      <h2>{name}</h2>
      <img className="property-image" src={img} alt={name} />
      {children}
    </section>
  )
}

export default Property
