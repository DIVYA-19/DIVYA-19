import * as React from 'react';
import './projects.css';

import Grid from '@mui/material/Grid';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Carousel from '../carousel/carousel';
import { PROJECTS } from '../projects';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Projects() {
    const [open, setOpen] = useState(false);
    const [currentProj, setCurrentProj] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="container">
            <div className="bg-title" style={{ letterSpacing: '1rem' }}>
                WORKS
                <div className="front-title">
                    my <span className="yellow-part">portfolio</span>
                </div>
            </div>
            <Grid
                container
                rowSpacing={5}
                columnSpacing={7}
                marginTop={'50px'}
                paddingBottom={'50px'}
            >
                {PROJECTS.map(function (project) {
                    return (
                        <Grid item xs={4} key={project.name}>
                            <div className="project">
                                <img src={project.thumbnail}></img>
                                <div
                                    className="project-title"
                                    onClick={function () {
                                        handleClickOpen();
                                        setCurrentProj(project);
                                    }}
                                >
                                    {project.name}
                                </div>
                            </div>
                        </Grid>
                    );
                })}
            </Grid>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                fullWidth
                maxWidth="md"
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                PaperProps={{
                    elevation: 0,
                    sx: {
                        border: 'none',
                        backgroundColor: '#252525',
                        color: '#fff',
                    },
                }}
                BackdropProps={{
                    classes: {
                        root: {
                            backgroundColor: '#000',
                            overflow: 'scrollable',
                            boxShadow: 'none',
                        },
                    },
                }}
            >
                <div className="dialog-content">
                    <div className="proj-title">
                        {currentProj && currentProj.name}
                    </div>
                    <Grid
                        container
                        rowSpacing={1}
                        marginTop="20px"
                        justifyContent="center"
                        marginBottom="20px"
                        className="proj-details"
                    >
                        <Grid item xs={5}>
                            project: <span>website</span>
                        </Grid>
                        <Grid item xs={5}>
                            client: <span>self</span>
                        </Grid>
                        <Grid item xs={5}>
                            Languages:{' '}
                            <span>
                                {currentProj == null
                                    ? ''
                                    : currentProj.languages}
                            </span>
                        </Grid>
                        <Grid item xs={5}>
                            Link:{' '}
                            <span>
                                <a className="proj-link" href="#">
                                    {currentProj == null
                                        ? ''
                                        : currentProj.link}
                                </a>
                            </span>
                        </Grid>
                        <Grid item xs={10}>
                            <Carousel
                                images={
                                    currentProj == null
                                        ? []
                                        : currentProj.images
                                }
                            />
                        </Grid>
                    </Grid>
                </div>
            </Dialog>
        </div>
    );
}

export default Projects;
