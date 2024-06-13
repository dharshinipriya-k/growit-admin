import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import { Layout, Menu, Button, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { MdDashboard, MdCategory, MdOutlineCategory } from "react-icons/md";
import { SiSmartthings } from "react-icons/si";
import { HiMiniUsers } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import {
  FaCartPlus,
  FaBloggerB,
  FaReadme,
  FaQuestionCircle,
} from "react-icons/fa";
import { IoListCircle } from "react-icons/io5";
import { ImBlog } from "react-icons/im";

const { Header, Sider, Content } = Layout;
function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">GI</span>
            <span className="lg-logo">GROW IT ADMIN</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <MdDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <HiMiniUsers className="fs-4" />,
              label: "Customers",
            },
            {
              key: "Catalogue",
              icon: <SiSmartthings className="fs-4" />,
              label: "Catalogue",
              children: [
                {
                  key: "add-product",
                  icon: <FaCartPlus className="fs-4" />,
                  label: "Add Product",
                },
                {
                  key: "product-list",
                  icon: <FaCartShopping className="fs-4" />,
                  label: "Product List",
                },
                {
                  key: "add-category",
                  icon: <MdCategory className="fs-4" />,
                  label: "Add Category",
                },
                {
                  key: "category-list",
                  icon: <MdOutlineCategory className="fs-4" />,
                  label: "Category List",
                },
              ],
            },

            {
              key: "orders",
              icon: <IoListCircle className="fs-4" />,
              label: "Orders",
            },

            {
              key: "blog",
              icon: <FaReadme className="fs-4" />,
              label: "Blogs",
              children: [
                {
                  key: "add-blog",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Blog List",
                },
              ],
            },

            {
              key: "enquiries",
              icon: <FaQuestionCircle className="fs-4" />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between ps-3 pe-5"
          style={{ padding: 0, background: colorBgContainer }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}

          <div className="d-flex gap-3 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>
            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  width={32}
                  height={32}
                  src="https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg="
                  alt=""
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0">Krithiga</h5>
                <p className="mb-0">krithi@yahoo.com</p>
              </div>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li className="py-2">
                  <Link
                    to="/"
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                  >
                    View Profile
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    to="/"
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                  >
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
