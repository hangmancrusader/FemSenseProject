
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CustomCard = ({ imageUrl, sx, link, title, description }) => {
  return (
    <Card sx={{  ...sx }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={imageUrl} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#6E5F6A">
            <a
              style={{ textDecoration: 'none', color: 'inherit' }}
              target="_blank"
              href={link}
            >
              {title}
            </a>
          </Typography>
          <Typography variant="body2" color="#6E5F6A">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;