import React, { useState, useEffect } from 'react';

import { reportTypes } from '../../types';
import { reportService } from '../../services';
import './index.scss';

const Reports = () => {
  const [reports, setReports] = useState<reportTypes.ReportsList>({
    data: [],
    count: 0,
  });

  const getReports = async () => {
    const data = await reportService.getReports();       
    setReports(data);
  };

  useEffect(() => {
    getReports();
  }, []);

  return (
    <>
      {!reports.data.length && <h4>Fetching Data...</h4>}

      {reports.data.length && (
        <div className="reports">
          <h1>Reports</h1>

          <table className="reports-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Telescope Model</th>
                <th>Subject</th>
                <th>Telescope Type</th>
                <th>Eyepiece</th>
                <th>Magnificaition</th>
                <th>Filter</th>
                <th>Observation Real Duration (Mins)</th>
                <th>Observation Virtual Duration (Mins)</th>
                <th>Observation Start Date</th>
                <th>Observation End Date</th>
              </tr>
            </thead>

            <tbody>
              {reports.data.map(report => (
                <tr key={report.id}>
                  <td>
                    <strong>{report.id}</strong>
                  </td>
                  <td>{report.subject}</td>
                  <td>{report.telescopeModel}</td>
                  <td>{report.telescopeType}</td>
                  <td>{report.eyepiece}</td>
                  <td>{report.magnification}</td>
                  <td>{report?.filter}</td>
                  <td>{report.observationRealDurationMin}</td>
                  <td>{report.observationVirtualDurationMin}</td>
                  <td>{report.observationStartDate}</td>
                  <td>{report.observationEndDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Reports;
