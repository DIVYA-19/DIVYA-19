import './expnEd.css';

import Grid from '@mui/material/Grid';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

import { EXPNED } from '../common_data/expnEd';

function ExpnEd() {
    return (
        <div className="expned">
            <p className="heading">EXPERIENCE & EDUCATION</p>
            <Grid container spacing={2} justifyContent="space-around">
                {EXPNED.map(function ({ year, title, desc }) {
                    return (
                        <Grid item xs={5.5} key={title}>
                            <Grid container alignItems="start">
                                <Grid
                                    item
                                    xs={1}
                                    className="icon icon-exp"
                                    marginRight={2}
                                >
                                    <BusinessCenterIcon />
                                </Grid>
                                <Grid item xs={10} className="exp">
                                    <div className="year">{year}</div>
                                    <div className="title">{title}</div>
                                    <div className="desc">{desc}</div>
                                </Grid>
                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}

export default ExpnEd;
