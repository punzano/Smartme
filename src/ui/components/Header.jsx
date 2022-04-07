import React from 'react';

import { Grid } from '@mui/material';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

const Header = () => (
    <header className="header">
        <Grid container item>
            <Grid container item xs={12} lg={4} alignItems="center" direction="row" className="title">
                <EmojiEventsOutlinedIcon/>
                <Grid container item xs={10} direction="column" className="title-texts">
                    <span>MPIx &#174;</span>
                    <span>Mobile Performance Index</span>
                </Grid>
            </Grid>
            <p className="title-description">Índice de rendimiento mobile completo de las diferentes aplicaciones de un sector</p>
        </Grid>
    </header>
);

export default Header;
