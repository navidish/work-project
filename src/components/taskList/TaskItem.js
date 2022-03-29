import React from 'react'
import {Paper, Checkbox, Card, Button, Grid, Img, FormControlLabel} from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";


const TaskItem = (props) => {
    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });

    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                backgroundColor: '#fff',
                '&:hover': {
                    backgroundColor: '#cccccc',
                    opacity: [0.9, 0.8, 0.6],
                },
            }}
        >
            <Grid container spacing={2}>

                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <FormControlLabel control={<Checkbox checked={props.isChecked} onChange={props.changeStatus} />} label={props.content}/>
                            <Typography gutterBottom variant="subtitle1" component="p">
                                {props.content}
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                {props.description}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button  sx={{ cursor: 'pointer' }} variant="text" color='primary' onClick={props.deleteItem}>delete</Button>

                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            $1.00
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item>
                    <ButtonBase sx={{width: 168, height: 168}}>
                        <Img alt="taskImage" src={URL.createObjectURL(props.imgAddress)}/>
                    </ButtonBase>

                </Grid>

            </Grid>

        </Paper>
    )
}
export default TaskItem