import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const EtherCard = ({ address }) => {
  return (
    <Card sx={{ 
      width: 195,
      height: 285,
      background: '#313131',
      borderRadius: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      m:10,
      color: 'white',
      transition: '0.2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.04) rotate(-1deg)',
      },
    }}>
      <CardContent>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.37 1277.39">
          <g id="Layer_x0020_1">
            <polygon fill="#343434" fillRule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54"/>
            <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,0 0,650.54 392.07,882.29 392.07,472.33"/>
            <polygon fill="#3C3C3B" fillRule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89"/>
            <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,1277.38 392.07,956.52 0,724.89"/>
            <polygon fill="#141414" fillRule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33"/>
            <polygon fill="#393939" fillRule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33"/>
          </g>
        </svg>
        <div className="textBox">
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 20 }}>Ethereum</Typography>
          <Typography variant="subtitle1">{address}</Typography>
          <Typography variant="body1" sx={{ fontSize: 17 }}>0</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default EtherCard;
