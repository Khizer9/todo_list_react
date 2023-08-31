import React, { useEffect, useState } from 'react'
import TodoModal from './TodoModal';

const TodoList = () => {
    const [addNew, setAddNew] = useState(JSON.parse(localStorage.getItem('user')));
    const [addName, setaddName] = useState("");
    const [blue, setBlue] = useState('')
    const [green, setGreen] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [editArray, setEditArray] = useState(null)

    const addNewHandler = () => {
        if(addName === '' ){
          alert('Please enter a Todo')
        }else{
          setAddNew((prevArr) => {
            if(!Array.isArray(prevArr)){
              prevArr = []
            }
            return [
              ...prevArr,
              {
                id: new Date(),
                name: addName,
                // age: addAge,
              },
            ]
          });
          setaddName('')
        }
        
      };
    
      useEffect(() => {
        localStorage.setItem('user', JSON.stringify(addNew))
      }, [addNew])
    
      const deleteHandler = (id) => {
        const updatedArray = addNew.filter((x) => x.id !== id);
        setAddNew(updatedArray);
      };
    
      const editHandler = (id) => {
        const updatedArray = addNew.find((res) => res.id === id);
        setEditArray(updatedArray);
        setShowModal(true)
      }
    
      const handleSave = () => {
        const updatedArray = [...addNew]
    
        const updatedArrayIndex = updatedArray.findIndex((e) => e.id === editArray.id)
    
        if(updatedArrayIndex !== -1){
          updatedArray[updatedArrayIndex] = editArray
    
          setAddNew(updatedArray)
          setEditArray(null)
          setShowModal(false)
        }
      }
    
      const handleClose = () => {
        setShowModal(false)
      }
    
      const nameHandler = (e) => {
        let text = e.target.value
        setaddName(text)
      }
      const blueColorHandler = (id) => {
        setBlue(id)
      }
      const greeneColorHandler = (id) => {
        setGreen(id)
      }
        
  return (
    // <div>
    <>
      <h1>TODOLIST !</h1>
      <div className='main'>
      <input className="inputText" type="text" name="name" id="name" placeholder="Add Your TODO ...." value={addName} onChange={nameHandler}/>
      <button style={{marginBottom: '20px', padding: '10px'}} className="addBtn" onClick={addNewHandler}>
        Add New
      </button>
      </div>
      
      <div className="container">
        {addNew?.map((x) => (
          <h1 key={x.id} style={{backgroundColor: blue === x.id ? "blue" : '' || green === x.id ? "green" : ''}}>
            {x.name} <br /> {x.age} <br />
            <button className="delBtn" onClick={() => deleteHandler(x.id)}>
              Delete
            </button>
            <button className="delBtn" onClick={() => editHandler(x.id)}>
              Edit
            </button>
            <button className="delBtn" onClick={() => blueColorHandler(x.id)}>
              Blue
            </button>
            <button className="delBtn" onClick={() => greeneColorHandler(x.id)}>
              Green
            </button>
          </h1>
        ))}
      </div>
          <TodoModal handleClose={handleClose} showModal={showModal} handleSave={handleSave} editArray={editArray} setEditArray={setEditArray}></TodoModal>
          </>
    // </div>
  )
}

export default TodoList
