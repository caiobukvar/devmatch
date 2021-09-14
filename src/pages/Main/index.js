import './styles.css';
import Profilebar from '../../components/ProfileBar';
import JobOpportunity from './../../components/JobOpportunity';

function Main() {
  return (
    <div className="container-main">
      <Profilebar />
      <JobOpportunity
        img_url="https://e7.pngegg.com/pngimages/607/104/png-clipart-googleplex-google-logo-google-search-oliver-atom-text-logo-thumbnail.png"
        name="Google"
        description="asdasddasdas gugou"
        requirements={['React', 'NodeJS', 'ExpressJS']}
        seniority="Pleno"
        salary="5.200,00"
        benefits={['VT', 'VA', 'Plano de saúde', "Gympass", "Auxílio Home Office"]}
      />
    </div>
  );
}

export default Main;
