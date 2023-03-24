
import { Table } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { User } from "tsInterfaces";

interface DataType {
  dataSource: Array<Object>,
  columns: Array<Object>,
  size: SizeType,
  setFirstUser: React.Dispatch<React.SetStateAction<User>>
}



const TableItem = ({ dataSource, columns, size="middle", setFirstUser }: DataType) => {

  const changeFirstUser = (parameters:any) => {
    setFirstUser(parameters.currentDataSource[0])
  }

  
  return (
    <Table 
      dataSource={dataSource} 
      columns={columns} 
      size={size} 
      rowKey="id" 
      pagination={{ position: ["bottomCenter"] }} 
      onChange={(...args) => changeFirstUser({...args[3]})}
    />
  ) 
}

export default TableItem;