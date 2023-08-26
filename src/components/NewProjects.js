import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Typography, Box } from '@mui/material';

const itemData = [
  {
    img: 'React-Portfolio/Techblog12.png',
    title: 'Full-Stack Blog Application',
    about: 'Model-View-Controller Paradigm',
    projectLink: 'https://github.com/escotoj/TechBlogMVC'
  },
  {
    img: 'React-Portfolio/card-x.png',
    title: 'Card-X',
    about: 'Led a team of 5 as Scrum Master to launch a Full Stack MERN Application and host it on Heroku using Atlas',
    projectLink: 'https://github.com/escotoj/Card-X'
  }
];

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}`,
    srcSet: `${image}?w=${width * cols}&h=${height * rows}`,
  };
}

const NewProject = () => {
  return (
    <ImageList
      sx={{
        width: '100%',
        height: 500,
        transform: 'translateZ(0)',
      }}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
           <a href={item.projectLink} style={{ textDecoration: 'none' }}>
              <img
                {...srcset(item.img, 250, 200, rows, cols)}
                alt={item.title}
                loading="lazy"
                style={{ width: '100%' }}
              />
            </a>

  
            <ImageListItemBar
              sx={{
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};


export default NewProject;
