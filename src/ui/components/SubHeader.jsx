import React from 'react';

import { Grid, Select, MenuItem, Fab } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';

import AppContext from '../../infra/context/appContext';

const SubHeader = ({ sectors, onChangeSector, sectorSelected }) => {
    const getOptions = () => (
        sectors.map(sector => {
            return <MenuItem key={sector.id} value={sector.id}>{sector.name_spanish}</MenuItem>;
        })
    );

    return (
        <Grid container item direction={{ xs: "column", lg: "row" }} justifyContent="space-between" alignItems="center" className="subheader">
            <Grid item className="sector-selector" lg={2}>
                <Select
                    className="select"
                    onChange={onChangeSector}
                    value={sectorSelected}
                >
                    {getOptions()}
                </Select>
            </Grid>
            <Grid item container direction="row" justifyContent="space-between" alignItems="center" className="user-actions" lg={4}>
                <Fab variant="extended" size="small" className="notifications">
                    <NotificationsActiveIcon sx={{ mr: 1 }} />
                    Recibir alertas
                </Fab>
                <Grid item container direction="column" alignItems="center" className="download-wrapper">
                    <DownloadIcon className="download-icon"/>
                    <span>COMPARTIR</span>
                </Grid>
                <Grid item container direction="column" alignItems="center" className="share-wrapper">
                    <ShareIcon className="share-icon"/>
                    <span>DESCARGAR</span>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SubHeader;
