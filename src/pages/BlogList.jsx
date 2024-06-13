import React, {useEffect} from 'react'
import {Table, Button} from 'antd'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { getBlogs, deleteBlog } from '../features/blog/BlogSlice';
const columns = [
    {
      title: 'Sno',
      dataIndex: 'key',
    },
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Category',
      dataIndex: 'category',
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];
  

function BlogList() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getBlogs())
  },[])

  const blogState = useSelector((state)=> state.blog.blogs)

  const data1 = [];
  for (let i = 0; i < blogState.length; i++) {
    data1.push({
      key: i+1,
      title: blogState[i].title,
      category: blogState[i].category,
      action: <div>
        <button id='prod-action-delete' onClick={()=>{
          dispatch(deleteBlog(blogState[i]?._id))
          dispatch(getBlogs())
        }}>  &nbsp;<MdDeleteOutline /></button>
       </div>,
    });
  }
  return (
    <div>
        <h3 className="mb-4 title">Blogs List</h3>
        <div>
            <Table           
                columns={columns}
                dataSource={data1}
            />
        </div>
    </div>
  )
}

export default BlogList