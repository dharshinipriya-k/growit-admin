import React, { useEffect } from "react";
import { Table, Button } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { getEnquiry } from "../features/enquiry/EnquirySlice";

const columns = [
  {
    title: "Sno",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
  },

  {
    title: "Comment",
    dataIndex: "comment",
  },

  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile No",
    dataIndex: "mobile",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

function Enquiries() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEnquiry());
  }, []);

  const enquiryState = useSelector((state) => state.enquiry.enquiry);

  const data1 = [];
  for (let i = 0; i < enquiryState.length; i++) {
    data1.push({
      key: i + 1,
      title: enquiryState[i].name,
      email: enquiryState[i].email,
      status: enquiryState[i].status,
      mobile: enquiryState[i].mobile,
      comment: enquiryState[i].comment,
      action: (
        <Link className="link">
          <Button id="prod-action-delete">
            {" "}
            &nbsp;
            <MdDeleteOutline />
          </Button>
        </Link>
      ),
    });
  }
  return (
    <div>
      <h3 className="mb-4 title">Enquiries</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
}

export default Enquiries;
