import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Typography } from '@mui/material';


const Project = () => {
    const itemData = [
      {
        img: '/React-Portfolio/Four-Leaf-CasinoApp.png',
        title: 'Full-Stack Casino Application',
        about: 'Collaboration using Express and MySQL',
        projectLink: 'https://github.com/ParticularSpace/WP-Cas'
      },
      {
        img: 'React-Portfolio/Techblog12.png',
        title: 'Full-Stack Blog Application',
        about: 'Model-View-Controller Paradigm',
        projectLink: 'https://github.com/escotoj/TechBlogMVC'

      }
      ,

      {
        img: 'React-Portfolio/weatherAppUpdate.png',
        title: 'Weather Application',
        about: 'BootStrap and IPA requests',
        projectLink: 'https://github.com/escotoj/WeatherApp'

      },
      {
        img: 'React-Portfolio/potterquizfinal.png',
        title: 'HP Timed Quiz',
        about: 'Vanilla HTML, CSS and JavaScript',
        projectLink: 'https://github.com/escotoj/QuizApp'

      },

      {
        img: 'React-Portfolio/bootstrapPortfolio.png',
        title: 'Bootstrap Portfolio',
        about: 'CDN Bootstrap, Line Awesome and Animate On Scroll',
        projectLink: 'https://github.com/escotoj/escotoj.github.io'
 
      },
      {
        img: 'React-Portfolio/passwordGen2.png',
        title: 'Password Generator',
        about: 'Applied data structures and algorithms along with vanilla HTML, CSS and JavaScript',
        projectLink: 'https://github.com/escotoj/password_project-'

      },
      {
        img: 'React-Portfolio/card-x.png',
        title: 'Card-X',
        about: 'Led a team of 5 as Scrum Master to launch a Full Stack MERN Application and host it on Heroku using Atlas',
        projectLink: 'https://github.com/escotoj/Card-X'

      },
      {
        img: 'React-Portfolio/search.png',
        title: 'Solid Workout App',
        about: 'Work in progress - MERN Application',
        projectLink: 'https://github.com/escotoj/solid-workout-app'

      }
    ];
  
return (
  <ImageList>
    
  {itemData.map((item) => (
    <ImageListItem sx={{ margin: '20px' }} key={item.img}>
      <img
        src={item.img}
        alt={item.title}
        loading="lazy"
        style={{ width: '80%'
          // height: { xs: 350, sm: 600, lg: 1000 },
      }}
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
      <a
        href={item.projectLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginBottom: '16px', textDecoration: 'none', color: 'inherit' }}
      >
        Learn More
      </a>
      
    </ImageListItem>
    
  ))}
</ImageList>
);
};

  
export default Project;