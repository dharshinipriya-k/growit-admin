import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/customers/CustomerSlice";
const columns = [
  {
    title: "Sno",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.name - b.name,
  },
  {
    title: "email",
    dataIndex: "email",
  },
  {
    title: "mobile",
    dataIndex: "mobile",
  },
];

function Customers() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const customerState = useSelector((state) => state.customer.customers);

  const data1 = [];
  for (let i = 0; i < customerState.length; i++) {
    if (customerState[i].role !== "admin") {
      data1.push({
        key: i,
        name: customerState[i].firstName + " " + customerState[i].lastName,
        email: customerState[i].email,
        mobile: customerState[i].mobile,
      });
    }
  }

  const { data } = customerState;
  return (
    <div>
      <h3 className="mb-4 title">Customers</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
}

export default Customers;
