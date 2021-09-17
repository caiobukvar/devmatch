import './styles.css';

function Skills({ skills, addButton }) {
    return (
        <div className="flex-row items-center">
            {skills.map(skill => (
                <div className="badge blue" key={skill}>
                    {skill}
                </div>
            ))}
            {
                addButton && <button className="badge blue-outline add-skills">
                    Adicionar
                </button>
            }
        </div>
    );
}

export default Skills;