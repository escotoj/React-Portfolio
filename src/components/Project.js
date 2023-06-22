import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Typography } from '@mui/material';


const Project = () => {
    const itemData = [
      {
        img: './Four-Leaf-CasinoApp.png',
        title: 'Full-Stack Casino Application',
        about: 'Collaboration using Express and MySQL',
      },
      {
        img: './weatherAppUpdate.png',
        title: 'Weather Application',
        about: 'BootStrap and IPA requests',
      },
      {
        img: './Techblog12.png',
        title: 'Full-Stack Blog Application',
        about: 'Model-View-Controller Paradigm',
      },
      {
        img: './potterquizfinal.png',
        title: 'HP Timed Quiz',
        about: 'Vanilla HTML, CSS and JavaScript',
      }
    ];
  
    return (
      <ImageList sx={{
        width: { xs: 350, sm: 500, lg: 800 },
        height: { xs: 350, sm: 450, lg: 850 },
      }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{ borderRadius: '4%' }}
            />
            <ImageListItemBar
              title={
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.title}
                </Typography>
              }
              subtitle={<span>{item.about}</span>}
              position="below"
              sx={{ marginTop: '16px', marginBottom: '16px' }}
            />
          </ImageListItem>

          
        ))}
      </ImageList>
    );
  };
  
export default Project;