import React, {useState} from 'react'
import {Button, TextField, Fab, Dialog, DialogTitle, DialogContent, DialogActions} from "@mui/material";
import TaskItem from "./TaskItem";
import AddIcon from '@mui/icons-material/Add';
import Register from "../login/Register";
import EmptyList from "./EmptyList";
import Box from "@mui/material/Box";


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
                    task.checked = !task.checked
                }
            }
        ))
        ;
    }
    return (
        <div dir="rtl">
            {taskList.length > 0 ?
                taskList.map(task => {
                    return (<TaskItem
                        key={task.id}
                        checked={task.checked}
                        content={task.content}
                        imgAddress={task.imgAddress}
                        description={task.description}
                        deleteItem={() => deleteItem(task.id)}
                        changeStatus={() => changeCheckState(task.id)}
                    />)
                }) : <EmptyList/>
            }
            <Dialog
                open={open}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p:2,
                    }}>
                    <DialogTitle id="alert-dialog-title">
                        <h5>add your new task</h5>
                    </DialogTitle>
                    <DialogContent>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <TextField
                               sx={{m:1}}
                                label="Title" variant="outlined" onChange={(e) => setTask(
                                {
                                    ...task,
                                    id: Math.floor(Math.random() * 10 + 11),
                                    content: e.target.value,
                                    checked: false
                                }
                            )} value={task.content}/>
                            <TextField
                                sx={{m:1}}
                                label="description" variant="outlined" onChange={(e) => setTask(
                                {
                                    ...task,
                                    description: e.target.value,
                                }
                            )} value={task.description}/>
                            {task.imgAddress ? (
                                    <div>
                                        <img alt="not fount" width={"250px"} src={URL.createObjectURL(task.imgAddress)}/>
                                        <br/>
                                        <button onClick={() => task.imgAddress = null}>Remove</button>
                                    </div>
                                ) :
                                <TextField
                                    sx={{m:1}}
                                    type="file"
                                    name="myImage"
                                    variant='standard'
                                    onChange={(event) => setTask(
                                        {
                                            ...task, imgAddress: event.target.files[0]
                                        }
                                    )}
                                />}

                        </Box>

                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" onClick={addTaskToList}>add to list</Button>
                    </DialogActions>
                </Box>
            </Dialog>
            <Fab color="secondary" onClick={() => setOpen(true)}>
                <AddIcon/>
            </Fab>
        </div>
    )

}
export default TaskList