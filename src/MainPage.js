import React from 'react'
import { Button } from '@mui/material';
import './MainPage.css'

export default function MainPage() {


  const kpiApplication = () => {
    // window.location.href = 'http://emp-kpims.io.s3-website-us-west-2.amazonaws.com';
    window.location.href = 'http://172.17.15.253:3000';
  }

  const checkPointAppication = () => {
    window.location.href = 'http://172.17.15.253:3002/loginform';
  }

  return (
    <div className='image' style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ padding: '20px', textAlign: 'center', maxWidth: '800px', color: '#ffffff' }}>
        <h1 style={{ marginBottom: '20px', fontSize: '2.5em' }}>Resource Performance</h1>
        <p style={{ padding: '0 20px', fontSize: '1.2em', lineHeight: '1.6', color: '#dae1ed' }}>
          <b>Key Performance Indicators (KPIs)</b> are measurable values that demonstrate how effectively a company or an individual is achieving key business objectives. KPIs are used across various industries and fields to assess performance, track progress, and make informed decisions.
        </p>
        <p style={{ padding: '0 20px', fontSize: '1.2em', lineHeight: '1.6', color: '#dae1ed' }}>
          <b>Code Review Check Points</b> typically refer to a set of guidelines or criteria that developers follow when reviewing another developer's code. Code reviews are a common practice in software development to ensure code quality, catch bugs, and maintain a consistent coding style. The term "check points" implies specific areas or aspects that need to be considered during the code review process.
        </p>
        <div style={{ marginTop: '20px' }}>
          <Button style={{ backgroundColor: '#00aaee', color: 'white', marginRight: '10px', width: '150px', height: '60px' }} onClick={kpiApplication}>
            KPI
          </Button>
          <Button style={{ backgroundColor: '#00aaee', color: 'white', width: '150px', height: '60px' }} onClick={checkPointAppication}>
            Review Check Points
          </Button>
        </div>
      </div>
    </div>
  );
}
