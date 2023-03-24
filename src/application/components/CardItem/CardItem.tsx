import { Card } from 'antd';
import { User } from 'tsInterfaces';

interface Props {
  firstUser: User;
}

const CardItem = ({firstUser}:Props) => {
  return (
    <Card title="First User" bordered={true} style={{ width: 300, textAlign: "left" }}>
      <h4>Name: {firstUser.name}</h4>
      <h4>UserName: {firstUser.username}</h4>
      <h4>Email: {firstUser.email}</h4>
      <h4>Addres:</h4>
      <ul>
        <li><b>Street:</b> {firstUser.address.street}</li>
        <li><b>Suite:</b> {firstUser.address.suite}</li>
        <li><b>City:</b> {firstUser.address.city}</li>
        <li><b>Zip code:</b> {firstUser.address.zipcode}</li>
      </ul>
      <h4>Phone: {firstUser.phone}</h4>
      <h4>website: {firstUser.website}</h4>
      <h4>Company:{firstUser.company.name}</h4>
    </Card>
  )
}

export default CardItem;