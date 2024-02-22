"use client";
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function Categories() {
    const [data,setData] = useState([]);
    const [condition,setCondition] = useState([]);
    useEffect(() => {
        axios
        .get(`http://patient.com/api/categories`)
        .then(r => {
          setData(r.data.lists)
        })
        .catch(error => {
          alert(error.message)
        })
      },[condition]);
    return (
        <div>
            {data.map(item => <li>{item}</li>)}
        </div>
    );
}

export default Categories;