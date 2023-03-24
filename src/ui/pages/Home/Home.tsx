import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getUsers } from '../../../services/api/users/userActions';
import { Button, Spin } from "antd";
import TableItem from '../../../application/components/TableItem/TableItem';
import { usersColumns } from '../../../application/components/TableItem/tableStructures';
import CardItem from "application/components/CardItem/CardItem";
import { User } from "tsInterfaces";

import "./Home.css";

const Home = () => {
  const initialState = {
    "id": 0,
    "name": "",
    "username": "",
    "email": "",
    "address": {
      "street": "",
      "suite": "",
      "city": "",
      "zipcode": "",
      "geo": {
        "lat": "",
        "lng": ""
      }
    },
    "phone": "",
    "website": "",
    "company": {
      "name": "",
      "catchPhrase": "",
      "bs": ""
    }
  };

  const { data, isLoading, error, refetch, isFetched } = useQuery("getUsers", getUsers);
  const [firstUser, setFirstUser] = useState<User>(initialState);

  if(isLoading) {
    <Spin size="large"/>
  }

  if(error) {
    <>
      <h3> Problems in server</h3>
      <h3> Try Again</h3>
      <Button type="primary" danger onClick={() => refetch}>GET USERS</Button>
    </>
  }

  useEffect(() => {
    data?.length > 0 && setFirstUser(data[0])
  },[isFetched])
  

  if(isFetched) {
    return (
      <div className="data-container">
        <div className="table-container">
          <TableItem dataSource={data} columns={usersColumns(data)} size="middle" setFirstUser={setFirstUser} />
        </div>
        <div className="cardItem-container">
          <CardItem firstUser={firstUser} />
        </div>
      </div>
    )
  }

  return <Spin size="large"/>;
}

export default Home;