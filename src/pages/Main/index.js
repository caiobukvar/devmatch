import './styles.css';
import Profilebar from '../../components/ProfileBar';
import JobOpportunity from './../../components/JobOpportunity';

function Main() {
  return (
    <div className="container-main">
      <Profilebar />
      <JobOpportunity />
    </div>
  );
}

export default Main;
