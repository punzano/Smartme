import React from 'react';

import { Grid, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import TableHead from './MPIxTableHead';

const MPIxTable = ({ mpix = [] }) => {
	// Lo suyo sería tratar de sacar esta lógica fuera del componente
	// Con algo más de tiempo, haría un mapper sobre la información que devuelve el API en el que se transforma la información
	// y ya pasarle la información mapeada al componente en la prop
	// Además de ese modo permitiría probar estas funciones unitariamente, cosa que ahora no se puede
	const getMPIxValueFormatted = (value) => {
		return Number(value).toFixed(1);
	};

	const getValueWithArrowUp = (value) => (
		<Grid container alignItems="center">
			<ArrowDropUpIcon className="arrow-up-icon"/>
			<span>{value}%</span>
		</Grid>
	);

	const getValueWithArrowDown = (value) => (
		<Grid container alignItems="center">
			<ArrowDropDownIcon className="arrow-down-icon"/>
			<span>{value}%</span>
		</Grid>
	);

	const getVariationValueFormatted = (value) => {
		const valueFloat = parseFloat(value);
		const floatToPercentage = valueFloat * 100;
		const percentageToRounded = floatToPercentage.toFixed(2);

		if (percentageToRounded > 0) {
			return getValueWithArrowUp(percentageToRounded);
		}

		return getValueWithArrowDown(percentageToRounded);
	};

	const getPenetrationValueFormatted = (value) => {
		const valueFloat = parseFloat(value);
		const floatToPercentage = valueFloat * 100;

		return `${floatToPercentage.toFixed(0)}%`;
	};

	const getMPIxApps = (mpix) => (
		mpix.map(row => (
			<TableRow key={row.idApp}>
				<TableCell align="center" className="table-body-cell position">{row.position}</TableCell>
				<TableCell className="table-body-cell company">{row.name}</TableCell>
				<TableCell className="table-body-cell">{getMPIxValueFormatted(row.mpix)}</TableCell>
				<TableCell className="table-body-cell variation">{getVariationValueFormatted(row.variation)}</TableCell>
				<TableCell className="table-body-cell">{getPenetrationValueFormatted(row.penetration)}</TableCell>
				<TableCell className="table-body-cell">{row.sector_spanish}</TableCell>
				<TableCell className="table-body-cell">{row.subsector_spanish}</TableCell>
			</TableRow>
		))
	);

	return (
		<TableContainer data-testid="mpix-table">
			<Table aria-label="customized table">
				<TableHead/>
				<TableBody className="table-body">
					{getMPIxApps(mpix)}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default MPIxTable;
