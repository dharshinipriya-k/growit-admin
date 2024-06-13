import React, { useEffect } from "react";
import { Table, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/auth/AuthSlice";

const columns = [
  {
    title: "Sno",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "No Of Products",
    dataIndex: "noofprod",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Order Date",
    dataIndex: "date",
  },
];

function Orders() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const orderState = useSelector((state) => state.auth.orders.userOrders);

  const data1 = [];
  for (let i = 0; i < orderState?.length; i++) {
    data1.push({
      key: i + 1,
      name: orderState[i]?.shippingInfo?.firstName,
      noofprod: orderState[i]?.orderItems?.length,
      product: orderState[i]?.orderItems?.map((i) => {
        return (
          <ul>
            <li>
              {i?.productId?.title} - {i?.productId?.quantity}
            </li>
          </ul>
        );
      }),
      amount: `$ ${orderState[i]?.totalPrice}`,
      date: new Date(orderState[i]?.createdAt).toLocaleString(),
    });
  }

  return (
    <div>
      <h3 className="mb-4 title">Orders</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
}

export default Orders;
