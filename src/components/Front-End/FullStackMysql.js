import React, { useState, useEffect } from 'react';
import { FiDelete } from 'react-icons/fi';
import axios from 'axios';
import './App.css'



function FullStackMysql() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [updateTask, setUpdateTask] = useState("");
  const [updateId, setUpdateId] = useState("");
  const [search, setSearch] = useState("");
  const [displayUpdateForm, setDisplayUpdateForm] = useState(false);

  const urlGet = "http://localhost:3001/";
  const urlPost = "http://localhost:3001/post";

  const containerClasses = displayUpdateForm ? "grid lg:grid-cols-2 sm:grid-cols-1 lg:place-content-center md:place-content-center sm:place-content-center h-96"
                              : "grid lg:grid-cols-1 sm:grid-cols-1 lg:place-content-center md:place-content-center sm:place-content-center h-96"



  const handleDatas = (e) => {
    setTask(e.target.value)
  }

  const handleUpdate = (e) => {
    setUpdateTask(e.target.value)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    axios.get(urlGet)
      .then(response => {
        setList(response.data)
      })
      .catch(err => console.log(err));

    return () => {
    };
  }, []);


  //add task
  let sendData = (e) => {
    axios.post(urlPost, { task: task })
      .then(res => console.log(task))
      .catch(err => console.log(err.data))
    e.preventDefault();
    window.location.reload();
  }


  //delete task
  const deleteTask = (taskid) => {

    axios.delete(`http://localhost:3001/delete/${taskid}`)
      .then(response => {
        console.log("Delete Successfully");
      }).catch((error) => {
        console.log(error);
      });
    window.location.href += "http://localhost:3000/";
    window.location.reload();
  }


  const setUpdateForm = (id) => {
    let filtered = list.filter(function (item) {
      return item.id === id
    })
    setUpdateId(filtered[0].id)
    console.log(updateId)
  }
  const updateList = () => {
    axios.put("http://localhost:3001/update", { updateId: updateId, task: updateTask })
      .then(response => {
        console.log("Updated Successfully");
      }).catch((error) => {
        console.log(error);
      });
    window.location.href += "http://localhost:3000/";
    window.location.reload();
  }


  return (
    <div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-16">
        <form className='flex lg:flex-row md:flex-row justify-center my-10 sm:flex-col sm:mx-40 taskForm'>
          <label className='mx-16 font-sans text-slate-800 text-2xl'>Search</label>
          <input className='p-2 ring-2 ring-red-600 rounded-md  focus:outline-none'
            type="text" name="name" placeholder='task...'  value={search}
            onChange={handleSearch} />
        </form>
        <form onSubmit={sendData} className='flex lg:flex-row md:flex-row justify-center my-10 sm:flex-col sm:mx-40 taskForm'>
          <label className='mx-16 font-sans text-slate-800 text-2xl'>Task</label>
          <input className='p-2 ring-2 ring-red-600 rounded-md  focus:outline-none'
            type="text" name="name" placeholder='task...' value={task} onChange={handleDatas} />
          <button className='bg-gradient-to-r from-red-500 via-red-700 to-red-800 text-slate-200 rounded-md px-6 py-3
            mx-10'
            type='submit' name='submit'>Submit</button>
        </form>
      </div>

      <div className={containerClasses}>
        <div className='TaskView'>
          {list.filter((item) => {
            if (search === "") {
              return item;
            }
            return item.task.includes(search);
          }).map(item => {
            return (
              <div key={item.id} className='place-items-center'>
                <div className='flex space-x-4 w-96 px-4 justify-between py-4 my-6 rounded-md bg-slate-700 text-blue-200 ring-2 ring-purple-700'>
                  <h1>{item.task}</h1>
                  <div className='flex justify-between space-x-3'>
                    <button className='p-1'
                      onClick={() => deleteTask(item.id)}>
                      <FiDelete size="1.4rem" color='crimson' />
                    </button>
                    <button onClick={() => { setUpdateForm(item.id); setDisplayUpdateForm(!displayUpdateForm) } }>Update</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className='place-self-center' style={{display : displayUpdateForm ? "block" : "none"}}>
          <form onSubmit={updateList} className='flex lg:flex-row md:flex-row justify-center my-10 sm:flex-col sm:mx-40'>
            <input className='p-2 ring-2 ring-indigo-800 rounded-md  focus:outline-none'
              type="text" name="name" placeholder='task...' value={updateTask} onChange={handleUpdate} />
            <button className='bg-gradient-to-r from-indigo-500 via-indigo-700 to-indigo-900 text-slate-200 rounded-md px-6 py-3
                  mx-10'
              type='submit' name='submit'>Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}



export default FullStackMysql;


