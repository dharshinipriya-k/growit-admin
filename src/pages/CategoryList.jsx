import React, { useEffect } from 'react'
import {Table, Button} from 'antd'
import { getCategory, deleteCategory } from '../features/category/CategorySlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import {Link} from 'react-router-dom'
const columns = [
    {
      title: 'Sno',
      dataIndex: 'key',
    },
    {
      title: 'Category',
      dataIndex: 'title',
    },
    
    {
      title: 'Action',
      dataIndex: 'action',
    },
   
  ];

function CategoryList() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCategory())
  },[])

  const categoryState = useSelector((state)=> state.category.categories)
 

  const data1 = [];
  for (let i = 0; i < categoryState.length; i++) {
    data1.push({
      key: i+1,
      title: categoryState[i].title,
      action: <div>
        
        <button id='prod-action-delete' onClick={() => {
          dispatch(getCategory())
          dispatch(deleteCategory(categoryState[i]?._id))
          dispatch(getCategory())
        }}>  &nbsp;<MdDeleteOutline /></button>
        </div>
    });
  }

  return (
    <div>
        <h3 className="mb-4 title">Product Category List</h3>
        <div>
            <Table           
                columns={columns}
                dataSource={data1}
            />
        </div>
    </div>
  )
}

export default CategoryList