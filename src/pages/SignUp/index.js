import './styles.css';
import '../../styles/form.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Copyright from '../../components/Copyright/Copyright.js';
import InputPassword from '../../components/InputPassword/InputPassword';
import { getCityByCEP } from '../../services/viaCEP';

function SignUp() {



    useEffect(() => {
        getCityByCEP('19026750');
    }, []);

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [cep, setCep] = useState('');
    const [city, setCity] = useState('');

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
                            <input
                                id="cep"
                                type="text"
                                placeholder="Digite seu CEP"
                                value={cep}
                                onChange={(e) => setCep(e.value.target)}
                            />
                        </div>
                        <InputPassword
                            label="Senha"
                            placeholder="Digite sua senha"
                            value={password}
                            setValue={setPassword}
                        />
                    </div>
                    <div>
                        <div className="flex-column">
                            <label htmlFor="city">Cidade</label>
                            <input
                                id="city"
                                type="text"
                                placeholder="Digite sua cidade"
                                value={city}
                                onChange={(e) => setCity(e.value.target)}
                            />
                        </div>
                        <div className="flex-column">
                            <label htmlFor="email">E-mail</label>
                            <input id="email" type="text" placeholder="Digite seu e-mail" />
                        </div>
                        <InputPassword
                            label="Confirme sua senha"
                            placeholder="Digite sua senha novamente"
                            value={confirmPassword}
                            setValue={setConfirmPassword}
                        />
                    </div>
                </div>
                <button className="btn-dark-blue items-center content-center">Cadastre-se</button>
                <Copyright />
            </form>
        </div>
    )
}

export default SignUp;