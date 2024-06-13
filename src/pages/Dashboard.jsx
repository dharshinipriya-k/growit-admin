import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/auth/AuthSlice";
import { getUsers } from "../features/customers/CustomerSlice";
import { getEnquiry } from "../features/enquiry/EnquirySlice";

function Dashboard() {
  const dispatch = useDispatch();

  const orderState = useSelector((state) => state.auth.orders.userOrders);
  const customerState = useSelector((state) => state.customer.customers);
  const enquiryState = useSelector((state) => state.enquiry.enquiry);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  // Total revenue calculation
  let sum = 0;
  const revenue = orderState?.map((item, index) => {
    sum = sum + item?.totalPrice;
  });

  // Total no of products sold calculation
  let totalProducts = 0;
  const prodsum = orderState?.map((item, index) => {
    totalProducts = totalProducts + item?.orderItems?.length;
  });

  const data = [
    {
      type: "Jan",
      sales: 38,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "Mar",
      sales: 61,
    },
    {
      type: "Apr",
      sales: 145,
    },
    {
      type: "May",
      sales: 48,
    },
    {
      type: "Jun",
      sales: 38,
    },
    {
      type: "Jul",
      sales: 67,
    },
    {
      type: "Aug",
      sales: 45,
    },
    {
      type: "Sep",
      sales: 78,
    },
    {
      type: "Oct",
      sales: 95,
    },
    {
      type: "Nov",
      sales: 105,
    },
    {
      type: "Dec",
      sales: 35,
    },
  ];

  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#008000";
    },
    label: {
      position: "middle",
      style: {
        fill: "#008000",
        opacity: 1,
      },
    },

    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Income",
      },
    },
  };

  return (
    <div>
      <h3 className="mb-4">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="desc">Total No Of Orders</p>
            <h4 className="mb-0 sub-title">{orderState?.length}</h4>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="desc">Total Revenue</p>
            <h4 className="mb-0 sub-title">$ {sum}</h4>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="desc">No Of Customers</p>
            <h4 className="mb-0 sub-title">{customerState?.length}</h4>
          </div>
        </div>
      </div>
      <br /> <br /> <br /> <br />
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="desc">Total No Of Products Sold</p>
            <h4 className="mb-0 sub-title">{totalProducts}</h4>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="desc">No Of Enquiries pending</p>
            <h4 className="mb-0 sub-title">{enquiryState?.length}</h4>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="desc">No Of Enquiries resolved</p>
            <h4 className="mb-0 sub-title">6</h4>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Dashboard;
