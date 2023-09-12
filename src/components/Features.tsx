import { PropsData } from '../App'

const Features: React.FC<Pick<PropsData, 'features'>> = ({ features }) => {
  const list = features.map(({ name, isPackage }) =>
    isPackage ? <li>✅ {`${name}`}</li> : <li>❌ {`${name}`}</li>
  )
  return (
    <>
      <h3>Features</h3>
      <ul className="features">{list}</ul>
    </>
  )
}

export default Features
