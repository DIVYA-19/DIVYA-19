import * as React from 'react';
import './contact.css';
import Grid from '@mui/material/Grid';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import MapIcon from '@mui/icons-material/Map';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DraftsIcon from '@mui/icons-material/Drafts';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [alertOpen, setAlretOpen] = useState(false);
    const [sentMsgStatus, setSentMsgStatus] = useState('');

    const sendMessage = () => {
        console.log(name, userEmail, subject, message);
        fetch('http://localhost:8080/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                subject: subject,
                message: message,
                name,
                email: userEmail,
            }),
        })
            .then(function (res) {
                if (res.status === 500 || res.status === 404)
                    setSentMsgStatus('failed');
                else setSentMsgStatus('success');
            })
            .catch(function (err) {
                setSentMsgStatus('failed');
            });
        setAlretOpen(true);
    };

    return (
        <div className="container">
            <div className="bg-title">
                contact
                <div className="front-title">
                    get in <span className="yellow-part">touch</span>
                </div>
            </div>
            <Grid container marginTop={6} justifyContent="space-between">
                <Grid item xs={4}>
                    <Stack
                        direction="row"
                        spacing={3}
                        className="contact-detail"
                    >
                        <MapIcon className="address-icon" />
                        <div>
                            <div>ADDRESS POINT</div>
                            <div>
                                123 street new yorl city, united states of
                                america 717271
                            </div>
                        </div>
                    </Stack>
                    <Stack
                        direction="row"
                        spacing={3}
                        className="contact-detail"
                    >
                        <DraftsIcon className="address-icon" />
                        <div>
                            <div>MAIL ME</div>
                            <div>divyareddy.y019@gmail.com</div>
                        </div>
                    </Stack>
                    <Stack
                        direction="row"
                        spacing={3}
                        className="contact-detail"
                    >
                        <PhoneIcon className="address-icon" />
                        <div>
                            <div>CALL ME</div>
                            <div>123345566</div>
                        </div>
                    </Stack>
                    <Stack
                        direction="row"
                        spacing={2}
                        className="contact-detail"
                    >
                        <div
                            className="icon icon-btn"
                            style={{ border: 'none' }}
                        >
                            <a
                                href="https://twitter.com/divyary_"
                                target={'_blank'}
                                rel="noreferrer"
                            >
                                <FacebookIcon style={{ color: '#fff' }} />
                            </a>
                        </div>
                        <div
                            className="icon icon-btn"
                            style={{ border: 'none' }}
                        >
                            <a
                                href="https://www.instagram.com/divya.r.yeruva/"
                                target={'_blank'}
                                rel="noreferrer"
                            >
                                <InstagramIcon style={{ color: '#fff' }} />
                            </a>
                        </div>
                        <div
                            className="icon icon-btn"
                            style={{ border: 'none' }}
                        >
                            <a
                                href="https://in.linkedin.com/in/divya-yeruva"
                                target={'_blank'}
                                rel="noreferrer"
                            >
                                <LinkedInIcon style={{ color: '#fff' }} />
                            </a>
                        </div>
                    </Stack>
                </Grid>
                <Grid item xs={7}>
                    <Grid container rowSpacing={4} columnSpacing={10}>
                        <Grid item xs={5}>
                            <input
                                name="name"
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                placeholder="YOUR NAME"
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <input
                                name="email"
                                type="text"
                                onChange={(e) => setUserEmail(e.target.value)}
                                value={userEmail}
                                placeholder="YOUR EMAIL"
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <input
                                name="subject"
                                type="text"
                                onChange={(e) => setSubject(e.target.value)}
                                value={subject}
                                placeholder="YOUR SUBJECT"
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <textarea
                                name="message"
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                placeholder="YOUR MESSAGE"
                            ></textarea>
                        </Grid>
                        <Grid item>
                            <div className="custom-btn" onClick={sendMessage}>
                                send a message
                            </div>
                        </Grid>
                        <Dialog
                            open={alertOpen}
                            onClose={() => setAlretOpen(false)}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <div className="alert">
                                <div className="alert-title">
                                    {sentMsgStatus === 'success'
                                        ? 'Message sent!!!'
                                        : 'Something went wrong'}
                                </div>
                                {sentMsgStatus === 'success' ? (
                                    <CheckCircleOutlineIcon
                                        style={{
                                            fontSize: '80px',
                                            color: 'rgb(46, 125, 50)',
                                        }}
                                    />
                                ) : (
                                    <CancelOutlinedIcon
                                        style={{
                                            fontSize: '80px',
                                            color: 'rgb(211, 47, 47)',
                                        }}
                                    />
                                )}
                                <div className="alert-message">
                                    {sentMsgStatus === 'success'
                                        ? 'You will get a response in 2-3 business days'
                                        : 'Please try again'}
                                </div>
                            </div>
                        </Dialog>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Contact;
