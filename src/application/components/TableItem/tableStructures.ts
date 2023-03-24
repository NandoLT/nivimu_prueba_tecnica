let userCityFilter:Array<object> = [];

export const usersColumns = [
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
      if(!userCityFilter.includes({text: item.city, value: item.city})){
        userCityFilter.push({
          text:item.city,
          value:item.city
        });
      }
      return item.city
    },
    filters: userCityFilter,
    onFilter: (value: string, record:any) => record.address.city === value
  }
];