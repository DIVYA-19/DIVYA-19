import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

import { SKILLS } from '../common_data/skills.js';
import './skills.css';
function Skills() {
    return (
        <div className="skills-container">
            <p className="heading">my Skills</p>
            {/* <Grid container spacing={2}> */}
            <div className="skills-grid">
                {SKILLS.map(function ({ skill, level }) {
                    return (
                        <Grid item xs={3} key={skill}>
                            <div className="skill">
                                <span className="percentage">{level}%</span>
                                <CircularProgress
                                    style={{
                                        position: 'relative',
                                        color: '#ffb400',
                                    }}
                                    className="circle-progress"
                                    variant="determinate"
                                    // size={100}
                                    value={level}
                                />
                                <p className="skill-name">{skill}</p>
                            </div>
                        </Grid>
                    );
                })}
                {/* </Grid> */}
            </div>
        </div>
    );
}

export default Skills;
