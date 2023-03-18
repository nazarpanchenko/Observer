import React, { ReactElement } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  Grid,
  styled,
  Typography,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import { ReportsList, ReportData } from '../../shared/types';
import './index.scss';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '1rem',
    fontWeight: 500,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Reports: React.FC = (): ReactElement => {
  const reports = useLoaderData() as ReportsList;

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ mb: 4 }} align="center">
          Reports
        </Typography>
      </Grid>

      <Grid item xs={6}></Grid>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="reports table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">ID</StyledTableCell>
              <StyledTableCell align="center">Subject</StyledTableCell>
              <StyledTableCell align="center">Magnification</StyledTableCell>
              <StyledTableCell align="center">Observation Real Duration</StyledTableCell>
              <StyledTableCell align="center">
                Observation Virtual Duration
              </StyledTableCell>
              <StyledTableCell align="center">
                Observation Start Date (min)
              </StyledTableCell>
              <StyledTableCell align="center">Observation End Date (min)</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {reports.data.map((report: ReportData) => (
              <StyledTableRow key={report.id}>
                <StyledTableCell component="th" scope="row" align="center">
                  {report.id}
                </StyledTableCell>
                <StyledTableCell align="center">{report.subject}</StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  {report.magnification}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  {report.observationRealDurationMin}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  {report.observationVirtualDurationMin}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  {`${report.observationStartDate}`}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  {`${report.observationEndDate}`}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Reports;
