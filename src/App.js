import { useEffect, useState } from "react";
import "./App.css";
import Modal from './components/Modal'
function App() {
  // const initialArray = [
  //   {
  //     id: 1,
  //     name: "khizer",
  //     age: 23,
  //   },
  //   {
  //     id: 2,
  //     name: "Ali",
  //     age: 32,
  //   },
  //   {
  //     id: 3,
  //     name: "Haider",
  //     age: 12,
  //   },
  // ];
  const [addNew, setAddNew] = useState(JSON.parse(localStorage.getItem('user')));
  const [addName, setaddName] = useState("");
  // const [addAge, setaddAge] = useState("");
  const [blue, setBlue] = useState('')
  const [green, setGreen] = useState('')

  const addNewHandler = () => {
    console.log(addNew, "addNew")
    setAddNew((prevArr) => [
      ...prevArr,
      {
        id: new Date(),
        name: addName,
        // age: addAge,
      },
    ]);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(addNew))
  }, [addNew])

  const deleteHandler = (id) => {
    console.log(id);
    const updatedArray = addNew.filter((x) => x.id !== id);
    setAddNew(updatedArray);
  };

  const editHandler = (userObj) => {
    <Modal />
    console.log(userObj)
    
  }

  const nameHandler = (e) => {
    let text = e.target.value
    setaddName(text)
  }

  // const ageHandler = (e) => {
  //   let age = e.target.value
  //   setaddAge(age)
  // }

  const blueColorHandler = (id) => {
    setBlue(id)
  }
  const greeneColorHandler = (id) => {
    setGreen(id)
  }

  return (
    <div className="App">
      <h1>TODOLIST !</h1>
      <input className="inputText" type="text" name="name" id="name" placeholder="Add Your TODO ...." value={addName} onChange={nameHandler}/>
      {/* <input className="inputText" type="number" name="age" id="age" placeholder="Enter Your Age" value={addAge} onChange={ageHandler}/> */}
      <button style={{marginBottom: '10px'}} className="addBtn" onClick={addNewHandler}>
        Add New
      </button>
      
      <div className="container">
        {addNew?.map((x) => (
          <h1 key={x.id} style={{backgroundColor: blue === x.id ? "blue" : '' || green === x.id ? "green" : ''}}>
            {x.name} <br /> {x.age} <br />
            <button className="delBtn" onClick={() => deleteHandler(x.id)}>
              Delete
            </button>
            <button className="delBtn" onClick={() => editHandler(x)}>
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
    </div>
  );
}

export default App;
