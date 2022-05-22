const crudcrudURL = 'https://crudcrud.com/api/86748502247f4c47b007bdac1655e8c8/todos'
export const readData = async (setToDoData) =>{
    let todoData = await fetch(crudcrudURL)
    let toDoJSON = await todoData.json()
    console.log(toDoJSON)
    setToDoData(toDoJSON)
}

export const submitData = async (formData , setFormData , setToDoData) =>{
    let newToDoPost = await fetch(crudcrudURL , 
    {
        method: 'POST' , 
        headers: {"Content-Type" : "application/json; charset = utf-8"},
        body: JSON.stringify({
            name: formData , 
            done: false
        })
    })
    setFormData('')
    readData(setToDoData)
}

export const deleteData = async (dataID , setToDoData) =>{
    await fetch(`${crudcrudURL}/${dataID}` ,
    {
        method: 'DELETE' ,
    })
    readData(setToDoData)
}

export const updateData = async (toDoObject , setToDoData) =>{
    let updatedObject = {...toDoObject};
    console.log(updatedObject);
    updatedObject.done = true;
    delete updatedObject._id;
    await fetch(`${crudcrudURL}/${toDoObject._id}` ,
        {
            method: 'PUT' , 
            headers: {"Content-Type" : "application/json; charset = utf-8"},
            body: JSON.stringify(
                updatedObject
            )
        })
    readData(setToDoData)
}
