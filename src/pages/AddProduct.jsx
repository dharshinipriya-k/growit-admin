import { useFormik, FieldArray } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import CustomInput from "../components/CustomInput";
import { getCategory } from "../features/category/CategorySlice";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../features/product/ProductSlice";
import { values } from "@ant-design/plots/es/core/utils";

let schema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.string().required("Price is required"),
  category: Yup.string().required("Select product category"),
  quantity: Yup.string().required("Enter quantity"),
  images: Yup.string().required("Image url is required!"),
});

function AddProduct() {
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state?.category?.categories);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      category: "",
      quantity: "",
      images: "",
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addProduct(values));
      resetForm();
    },
  });

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  return (
    <div>
      <h3 className="mb-4 title">Add Product</h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            label="Enter Product Title"
            name="title"
            onChng={formik.handleChange("title")}
            onBl={formik.handleBlur("title")}
            val={formik.values.title}
          />

          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>

          <div className="mb-4">
            <CustomInput
              type="text"
              label="Enter Product Description"
              name="desciption"
              onChng={formik.handleChange("description")}
              onBl={formik.handleBlur("description")}
              val={formik.values.description}
            />
          </div>

          <div className="error">
            {formik.touched.description && formik.errors.description}
          </div>

          <CustomInput
            type="number"
            label="Enter Product Price"
            name="price"
            onChng={formik.handleChange("price")}
            onBl={formik.handleBlur("price")}
            val={formik.values.price}
          />

          <div className="error">
            {formik.touched.price && formik.errors.price}
          </div>

          <select
            name="category"
            className="form-control py-3 mb-3 mt-4"
            onChange={formik.handleChange("category")}
            onBlur={formik.handleBlur("category")}
            val={formik.values.category}
            
          >
            <option value="" selected disabled>
              Select Product Category{" "}
            </option>

            {categoryState?.map((item, index) => {
              return <option key={index}>{item?.title}</option>;
            })}
          </select>

          <div className="error">
            {formik.touched.category && formik.errors.category}
          </div>

          <CustomInput
            type="text"
            label="Enter Product Quantity"
            name="quantity"
            onChng={formik.handleChange("quantity")}
            onBl={formik.handleBlur("quantity")}
            val={formik.values.quantity}
          />

          <div className="error">
            {formik.touched.quantity && formik.errors.quantity}
          </div>

          <CustomInput
            type="text"
            label="Enter Product Image Link"
            name="images"
            onChng={formik.handleChange("images")}
            onBl={formik.handleBlur("images")}
            val={formik.values.images}
          />

          <div className="error">
            {formik.touched.image && formik.errors.image}
          </div>

          <button
            type="submit"
            className="btn btn-success border-0 rounded-3 my-5"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
