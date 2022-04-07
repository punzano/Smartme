import React from 'react';

import { TableCell, TableHead, TableRow } from '@mui/material';

const MPIxTableHead = () => (
    <TableHead className="table-head">
        <TableRow>
            <TableCell className="table-head-cell">Puesto</TableCell>
            <TableCell className="table-head-cell">Empresa</TableCell>
            <TableCell className="table-head-cell">MPIx</TableCell>
            <TableCell className="table-head-cell">Variación</TableCell>
            <TableCell className="table-head-cell">Penetración</TableCell>
            <TableCell className="table-head-cell">Sector</TableCell>
            <TableCell className="table-head-cell">Subsector</TableCell>
        </TableRow>
    </TableHead>
);

export default MPIxTableHead;
