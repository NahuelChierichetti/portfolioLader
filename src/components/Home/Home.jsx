import './Home.css';
import bgLader from '../../assets/video/bg-lader.mp4';
import ProjectListContainer from '../ProjectListContainer/ProjectListContainer';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <div className='main'>
        <video src={bgLader} autoPlay loop muted className="fullscreen-video" />
        <div className="content">
          <motion.h1
            className='title-banner'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              Portfolio | 
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.7 }}
            >
              Agencia
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.9 }}
            >
              Lader
            </motion.span>
          </motion.h1>
        </div>
      </div>
      <ProjectListContainer />
    </>
  );
}

export default Home;