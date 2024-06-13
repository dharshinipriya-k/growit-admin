import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { createBlog } from "../features/blog/BlogSlice";

let schema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  image: Yup.string().required("Image url is required"),
  category: Yup.string().required("Blog Category is required"),
});

function AddBlog() {
  const dispatch = useDispatch();
  const [desc, setDesc] = useState();
  const handleDesc = (e) => {
    setDesc(e);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      image: "",
      category: "",
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      dispatch(createBlog(values));
      resetForm();
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">Add Blog</h3>

      <div className="">
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="mt-4">
            <CustomInput
              type="text"
              label="Enter Blog Title"
              name="title"
              onChng={formik.handleChange("title")}
              onBl={formik.handleBlur("title")}
              val={formik.values.title}
            />
          </div>

          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>

          <div className="mt-4">
            <CustomInput
              type="text"
              label="Enter Blog Category"
              name="category"
              onChng={formik.handleChange("category")}
              onBl={formik.handleBlur("category")}
              val={formik.values.category}
            />
          </div>

          <div className="error">
            {formik.touched.category && formik.errors.category}
          </div>

          <div className="mt-4">
            <CustomInput
              type="text"
              label="Enter Blog Image Url"
              name="image"
              onChng={formik.handleChange("image")}
              onBl={formik.handleBlur("image")}
              val={formik.values.image}
            />
          </div>

          <div className="error">
            {formik.touched.image && formik.errors.image}
          </div>

          <ReactQuill
            theme="snow"
            className="mt-4"
            name="description"
            onBlur={formik.handleBlur("description")}
            value={formik.values.description}
            onChange={formik.handleChange("description")}
          />

          <div className="error">
            {formik.touched.description && formik.errors.description}
          </div>

          <button
            type="submit"
            className="btn btn-success border-0 rounded-3 my-5"
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBlog;
