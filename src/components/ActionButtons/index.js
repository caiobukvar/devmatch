import './styles.css';
import LikeButtonIcon from '../../assets/like-button.svg';
import TrashButtonIcon from '../../assets/trash-button.svg';

function ActionButtons() {
    return (
        <div>
            <img className="button-icon" src={LikeButtonIcon} alt="like" />
            <img className="button-icon" src={TrashButtonIcon} alt="trash" />
        </div>
    );
}

export default ActionButtons;