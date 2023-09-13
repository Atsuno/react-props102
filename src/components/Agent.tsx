import { PropsData } from '../App'

const Agent: React.FC<PropsData['agent']> = ({
  isPaid,
  name,
  email,
  phone,
}) => (
  <>
    <h3>Agent</h3>
    {isPaid ? (
      <div className="agent-private">Show Only Paid Member</div>
    ) : (
      <ul>
        <li>
          <b>Name:</b> {name}
        </li>
        <li>
          <b>Email:</b> {email}
        </li>
        <li>
          <b>Phone:</b> {phone}
        </li>
      </ul>
    )}
  </>
)

export default Agent
