import React, {useState} from 'react'
import {Button, TextField} from "@mui/material";


const AddTask = () => {
    const [task, setTask] = useState({})

    return (
        <>
            <TextField label="Title" variant="outlined" onChange={(e) => setTask(
                {
                    id: Math.floor(Math.random() * 10 + 11),
                    content: e.target.value,
                    isChecked: false
                }
            )} value={task.content}/>
            
            <Button variant="outlined" onClick={}>add to list</Button>

        </>
    )

}
export default AddTask