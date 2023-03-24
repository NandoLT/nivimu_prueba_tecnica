import { User } from "tsInterfaces";

export const usersColumns = (data:Array<User>) =>{

  const cities = data.map(item => {
    return {
      text:item.address.city, 
      value: item.address.city
    }}
  );
  
  return [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '33%',
      sorter: (a:any, b:any) => a.name.localeCompare(b.name),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '33%',
    },
    {
      title: 'City',
      dataIndex: 'address',
      key: 'city',
      width: '33%',
      render: (item:any) => {
        return item.city
      },
      filters: cities,
      onFilter: (value: string, record:any) => record.address.city === value
    }
  ];
} 