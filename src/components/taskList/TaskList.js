import React, {useState} from 'react'
import {Button, TextField, Fab, Dialog, DialogTitle, DialogContent, DialogActions} from "@mui/material";
import TaskItem from "./TaskItem";
import AddIcon from '@mui/icons-material/Add';


const TaskList = () => {

    const [open, setOpen] = useState(false)
    const [task, setTask] = useState({})
    const [taskList, setTaskList] = useState([])
    const addTaskToList = () => {
        const updateTaskList = [...taskList, task];
        setTaskList(updateTaskList);
        setOpen(false);
        setTask("")

    }
    const deleteItem = (id) => {
        setTaskList(taskList.filter(task => task.id !== id));

    }
    const changeCheckState = (id) => {
        setTaskList(taskList.map(task => {
            if (task.id === id) {
                task.isChecked=!task.isChecked
            }
        }
    ))
        ;
    }
    return (
        <>
            {taskList.length > 0 ?
                taskList.map(task => {
                    return (<TaskItem
                        key={task.id}
                        checked={task.isChecked}
                        content={task.content}
                        imgAddress={task.imgAddress}
                        description={task.description}
                        deleteItem={() => deleteItem(task.id)}
                        changeStatus={()=>changeCheckState(task.id)}
                    />)
                }) : <h3>there is no task</h3>
            }
            <Dialog
                open={open}>
                <DialogTitle id="alert-dialog-title">
                    <h5>add your new task</h5>
                </DialogTitle>
                <DialogContent>
                    {task.imgAddress ? (
                            <div>
                                <img alt="not fount" width={"250px"} src={URL.createObjectURL(task.imgAddress)}/>
                                <br/>
                                <button onClick={() => task.imgAddress = null}>Remove</button>
                            </div>
                        ) :
                        <input
                            type="file"
                            name="myImage"
                            onChange={(event) => setTask(
                                {
                                    ...task, imgAddress: event.target.files[0]
                                }
                            )}
                        />}
                    <TextField label="Title" variant="outlined" onChange={(e) => setTask(
                        {
                            ...task,
                            id: Math.floor(Math.random() * 10 + 11),
                            content: e.target.value,
                            isChecked: false
                        }
                    )} value={task.content}/>
                    <TextField label="description" variant="outlined" onChange={(e) => setTask(
                        {
                            ...task,
                            description: e.target.value,
                        }
                    )} value={task.description}/>

                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={addTaskToList}>add to list</Button>
                </DialogActions>
            </Dialog>
            <Fab color="secondary" onClick={() => setOpen(true)}>
                <AddIcon/>
            </Fab>
        </>
    )

}
export default TaskList