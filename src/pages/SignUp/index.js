import './styles.css';
import '../../styles/form.css';
import { Link } from 'react-router-dom';
import Copyright from '../../components/Copyright';

function SignUp() {
    return (
        <div className="container-form">
            <form className="form form-sign-up">
                <div className="text-center mb-lg">
                    <h1>Cadastre-se</h1>
                    <Link to="/sign-in">Entrar</Link>
                </div>
                <div className="body-sign-up">
                    <div>
                        <div className="flex-column">
                            <label htmlFor="name">Nome</label>
                            <input id="name" type="text" placeholder="Digite seu nome" />
                        </div>
                        <div className="flex-column">
                            <label htmlFor="cep">CEP</label>
                            <input id="cep" type="text" placeholder="Digite seu CEP" />
                        </div>
                        <div className="flex-column">
                            <label htmlFor="email">E-mail</label>
                            <input id="email" type="text" placeholder="Digite seu e-mail" />
                        </div>
                    </div>
                    <div>
                        <div className="flex-column">
                            <label htmlFor="city">Cidade</label>
                            <input id="city" type="text" placeholder="Digite sua cidade" />
                        </div>
                        <div className="flex-column">
                            <label htmlFor="password">Senha</label>
                            <input id="password" type="password" placeholder="Digite sua senha" />
                        </div>
                        <div className="flex-column">
                            <label htmlFor="confirmPassword">Confirme a senha</label>
                            <input id="confirmPassword" type="password" placeholder="Digite sua senha novamente" />
                        </div>
                    </div>
                </div>
                <button className="btn-dark-blue items-center content-center">Cadastre-se</button>
                <Copyright />
            </form>
        </div>
    )
}

export default SignUp;