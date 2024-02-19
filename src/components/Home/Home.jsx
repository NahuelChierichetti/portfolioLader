import './Home.css';
import bgLader from '../../assets/video/bg-lader.mp4'
import ProjectListContainer from '../ProjectListContainer/ProjectListContainer';

const Home = () => {
  return (
    <>
        <div className='main'>
            <video src={bgLader} autoPlay loop muted className="fullscreen-video"/>
            <div className="content">
                <h1 className='title-banner'>Portfolio | Agencia Lader</h1>
            </div>
        </div>
        <ProjectListContainer />
    </>
   
  );
}

export default Home;