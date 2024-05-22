import React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../App.css';
import '../components/Login_Cadastro.css';

const CadastroForm = () => {
  const handleCadastro = (e) => {
    e.preventDefault();
  };

  return (
    <div className="cadastro-form">
      <h2 className="mb-4">Crie sua conta</h2>
      
      <Form onSubmit={handleCadastro}>
        <Form.Group controlId="formBasicEmail" className="mb-3">
          <Form.Label className='label'>Email</Form.Label>
          <Form.Control type="email" placeholder="Seu email" className='PlaceHolder'/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-3">
          <Form.Label className='label'>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha"  className='PlaceHolder'/>
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword" className="mb-3">
          <Form.Label >Confirme a Senha</Form.Label>
          <Form.Control type="password" placeholder="Confirme" className='PlaceHolder' />
        </Form.Group>

        <Button variant="primary" type="submit" block className="custom-button" role="button" name="custom-button">
          Cadastrar
        </Button>
      </Form>
    </div>
  );
};

export default CadastroForm;
