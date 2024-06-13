import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInput from "../components/CustomInput";
4;
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../features/category/CategorySlice";

let schema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
});

function AddCategory() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addCategory(values));
      resetForm();
    },
  });

  return (
    <>
      <div>
        <h3 className="mb-4 title">Add Category</h3>
        <div>
          <form action="" onSubmit={formik.handleSubmit}>
            <CustomInput
              type="text"
              label="Enter Category"
              name="title"
              onChng={formik.handleChange("title")}
              onBl={formik.handleBlur("title")}
              val={formik.values.title}
            />
            <div className="error">
              {formik.touched.title && formik.errors.title}
            </div>

            <button
              type="submit"
              className="btn btn-success border-0 rounded-3 my-5"
            >
              Add Category
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddCategory;
