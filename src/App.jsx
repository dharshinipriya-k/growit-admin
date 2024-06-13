import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import MainLayout from "./components/MainLayout";
import Enquiries from "./pages/Enquiries";
import BlogList from "./pages/BlogList";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import CategoryList from "./pages/CategoryList";
import ProductList from "./pages/ProductList";
import AddBlog from "./pages/AddBlog";

import AddCategory from "./pages/AddCategory";
import AddProduct from "./pages/AddProduct";
import OrderedProducts from "./pages/OrderedProducts";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="blog-list" element={<BlogList />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="category-list" element={<CategoryList />} />
          <Route path="product-list" element={<ProductList />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="orders/:id" element={<OrderedProducts />} />
          <Route path="edit-product/:id" element={<EditProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
