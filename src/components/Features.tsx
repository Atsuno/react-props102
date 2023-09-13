import { PropsData } from '../App'

const Features: React.FC<Pick<PropsData, 'features'>> = ({ features }) => (
  <>
    <h3>Features</h3>
    <ul className="features">
      {features.map(({ name: featureName, isAvailable }) =>
        isAvailable ? <li>✅ {featureName}</li> : <li>❌ {featureName}</li>
      )}
    </ul>
  </>
)

export default Features
