import './about.css';

import Grid from '@mui/material/Grid';
import Skills from '../skills/skills';
import ExpnEd from '../expnEd/expnEd';

import { DASHBOARD } from '../common_data/dashboard';

function About() {
    return (
        <div className="container">
            <div className="bg-title">
                resume
                <div className="front-title">
                    ABOUT <span className="yellow-part">ME</span>
                </div>
            </div>
            {/* <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                paddingBottom="0px"
                marginBottom="0px"
                marginTop="60px"
            > */}
            <div className="info-section">
                {/* <Grid item xs={6}> */}
                <Grid
                    container
                    direction="column"
                    height="400px"
                    justifyContent="start"
                >
                    <Grid item height="70px">
                        <p className="personal-info-heading">personal info</p>
                    </Grid>
                    <Grid item height="230px" className="info">
                        <Grid
                            container
                            direction="row"
                            justifyContent="start"
                            // className="info"
                            height="180px"
                        >
                            <Grid item xs={5}>
                                <Grid
                                    container
                                    direction="column"
                                    height="300px"
                                    width="600px"
                                    justifyContent="space-between"
                                >
                                    <ul>
                                        <li className="key">
                                            First Name:
                                            <span className="value">Divya</span>
                                        </li>
                                        <li className="key">
                                            Age:
                                            <span className="value">22</span>
                                        </li>
                                        <li className="key">
                                            Freelance:
                                            <span className="value">
                                                Available
                                            </span>
                                        </li>
                                        <li className="key">
                                            Phone:
                                            <span className="value">
                                                1234567890
                                            </span>
                                        </li>
                                        <li className="key">
                                            Skype:
                                            <span className="value">
                                                divya.yeruva
                                            </span>
                                        </li>
                                    </ul>
                                </Grid>
                            </Grid>
                            <Grid item xs={5} marginRight="40px">
                                <Grid container direction="column">
                                    <ul>
                                        <li className="key">
                                            Last Name:
                                            <span className="value">
                                                Yeruva
                                            </span>
                                        </li>
                                        <li className="key">
                                            Nationality:
                                            <span className="value">
                                                Indian
                                            </span>
                                        </li>
                                        <li className="key">
                                            Address:
                                            <span className="value">
                                                Ongole
                                            </span>
                                        </li>
                                        <li className="key">
                                            Email:
                                            <span className="value">
                                                divyareddy.y019@gmail.com
                                            </span>
                                        </li>
                                        <li className="key">
                                            First Name:
                                            <span className="value">
                                                Telugu, English
                                            </span>
                                        </li>
                                    </ul>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* </Grid> */}
                <Grid item xs={6}>
                    <div
                        container
                        direction="row"
                        justifyContent="end"
                        columnSpacing={0}
                        className="info2"
                    >
                        {DASHBOARD.map(function ({ title, number }) {
                            return (
                                <Grid item xs={6} key={title}>
                                    <div className="paper">
                                        <div className="paper-content">
                                            {number}
                                        </div>
                                        <div className="bottom-line">
                                            {title}
                                        </div>
                                    </div>
                                </Grid>
                            );
                        })}
                    </div>
                </Grid>
            </div>
            {/* </Grid> */}
            <Skills />
            <ExpnEd />
        </div>
    );
}

export default About;
