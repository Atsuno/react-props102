import { PropsData } from '../App'

const Agent: React.FC<PropsData['agent']> = ({
  isMember,
  name,
  email,
  phone,
}) => {
  const member =
    isMember === true ? (
      <>
        <div className="agent-private">Show Only Paid Member</div>
      </>
    ) : (
      <>
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
      </>
    )
  return (
    <>
      <h3>Agent</h3>
      {member}
    </>
  )
}

export default Agent
