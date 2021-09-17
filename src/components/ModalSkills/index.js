import './styles.css';
import CloseIcon from '../../assets/close-icon.svg'

function ModalSkill({ open, setOpen }) {
    const [newSkill, setNewSkill] = useState('');
    function handleAddNewSkill(e) {
        e.preventDefault();
    }

    return (
        <>
            {open &&
                <div className="modal">
                    <div className="modal-content flex-column content-center items-center">
                        <img src={CloseIcon}
                            alt="Close Icon"
                            className="modal-close-icon"
                            onClick={() => setOpen(false)}
                        />
                        <div className="flex-column items-center content-center">
                            <h2>Nova Habilidade</h2>
                            <input type="text" value={newSkill} onChange={setNewSkill} />
                            <button className="btn-dark-blue" onClick={(e) => handleAddNewSkill(e)}>

                            </button>
                        </div>
                    </div>
                </div>
            }
        </>

    );
}

export default ModalSkill;