import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  deleteProduct,
  editProduct,
  getSingleProduct,
} from "../features/product/ProductSlice";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
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
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price.length - b.price.length,
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

function ProductList() {
  const navigate = useNavigate();
  const [prod, setProd] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productState = useSelector((state) => state.product.products);

  const data1 = [];
  for (let i = 0; i < productState.length; i++) {
    data1.push({
      key: i + 1,
      title: productState[i].title,
      price: `$ ${productState[i].price}`,
      category: productState[i].category,
      action: (
        <div className="link">
          <button
            id="prod-action-delete"
            onClick={() => {
              dispatch(deleteProduct(productState[i]?._id));
              dispatch(getProducts());
            }}
          >
            {" "}
            &nbsp;
            <MdDeleteOutline />
          </button>
        </div>
      ),
    });
  }

  return (
    <div>
      <h3 className="mb-4 title">Product List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
}

export default ProductList;
