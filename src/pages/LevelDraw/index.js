import React, { useState } from 'react';
import PageWrapper from '../../components/PageWrapper';
import '../../components/style.css';
import WinnerFrame from '../../assets/winner-frame.gif';
import SpinningWheelLevel from '../../components/SpinningWheelLevel';
import { Box, Typography } from '@mui/material';
import DeloitteCircle from '../../assets/deloitte-circle.png';

const OfferingDraw = () => {
    const [ selectedCountry, setSelectedCountry ] = useState(null);
    const [ selectedLevel, setSelectedLevel ] = useState(null);
    const [ selectedEmployee, setSelectedEmployee ] = useState(null);

    const [ winners, setWinners ] = useState({});

    const firstStep = !selectedCountry && !selectedLevel && !selectedEmployee;
    const secondStep = selectedCountry && !selectedLevel && !selectedEmployee;
    const thirdStep = selectedCountry && selectedLevel && !selectedEmployee;

    const onSpinFinish = (value) => {
        let updatedValue = {};
        
        if (firstStep) {
            updatedValue = {'country': value};
            setWinners(winners=>({
                ...winners,
                ...updatedValue
            }));
            setTimeout(() => {
                setSelectedCountry(value);
            }, 2000);
        } else if (secondStep) {
            updatedValue = {'offering': value};
            setWinners(winners=>({
                ...winners,
                ...updatedValue
            }));
            setTimeout(() => {
                setSelectedLevel(value);
            }, 2000);
        } else if (thirdStep) {
            updatedValue = {'name': value};
            setWinners(winners=>({
                ...winners,
                ...updatedValue
            }));
            setTimeout(() => {
                setSelectedEmployee(value);
                setSelectedCountry(null);
                setSelectedLevel(null);
                setSelectedEmployee(null);
                setWinners({});
            }, 10000);
        };
    };

    return(
        <PageWrapper>
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    height: '100%',
                }}
            >
                <Box
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: '100%',
                        width: '50%',
                        padding: '80px 0 0 60px',
                    }}
                >
                    <Typography
                        style={{
                            fontSize: 35,
                            fontWeight: 400,
                            lineHeight: 1.2,
                            color: 'white',
                            marginBottom: 30,
                        }}
                    >
                        <i>Are you one of our</i> <br />
                        <b style={{ fontWeight: 700 }}>5 Apple iPhone</b> <i>winners?</i>
                    </Typography>
                    <Box 
                        style={{
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'center',
                            flexDirection: 'column',
                            width: 570,
                            height: 250,
                            backgroundColor: 'lightyellow',
                            border: '15px solid #1fadd8',
                            borderRadius: 15,
                            position: 'relative',
                        }}
                    >
                        <Typography
                            style={{
                                fontSize: 28,
                                fontWeight: 600,
                                color: 'deepskyblue',
                                margin: '20px 0 7px 0',
                            }}
                        >
                            Congratulations to:
                        </Typography>
                        <Typography 
                            style={{ 
                                fontSize: 32, 
                                marginBottom: 0,
                                textAlign: 'center',
                                lineHeight: 1.2,
                            }}
                        >
                            {winners.country}
                            <br />
                            {winners.offering} 
                            <br />
                            <b style={{ fontWeight: 700 }}>{winners.name}</b>
                        </Typography>
                        <img 
                            src={WinnerFrame} 
                            alt='winner-frame' 
                            style={{
                                position: 'absolute',
                                top: -40,
                                width: 600,
                                height: 300,
                            }}
                        />
                    </Box>
                </Box>
                <Box style={{  width: '50%', position: 'relative' }}>
                    <SpinningWheelLevel
                        onSpinFinish={(value) => onSpinFinish(value)}
                        selectedCountry={selectedCountry}
                        selectedLevel={selectedLevel}
                        selectedEmployee={selectedEmployee}
                    />
                    <img
                        src={DeloitteCircle}
                        alt='deloitte'
                        style={{
                            zIndex: 500,
                            position: 'absolute',
                            top: 320,
                            left: 240,
                            width: 150
                        }}
                    />
                </Box>
            </Box>
        </PageWrapper>
    )
};

export default OfferingDraw;