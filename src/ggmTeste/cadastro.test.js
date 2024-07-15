import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CadastroForm from '../compohome/cadastro';

test('renders CadastroForm', () => {
  render(<CadastroForm />);

  const title = screen.getByText(/Crie sua conta/i);
  expect(title).toBeInTheDocument();

  const emailInput = screen.getByLabelText(/Email/i);
  expect(emailInput).toBeInTheDocument();

  const passwordInput = screen.getAllByText(/Senha/i);
  expect(passwordInput).toBeInTheDocument();

  const confirmPasswordInput = screen.getByLabelText(/Confirme a Senha/i);
  expect(confirmPasswordInput).toBeInTheDocument();

  const submitButton = screen.getByRole('button', { name: /Cadastrar/i });
  expect(submitButton).toBeInTheDocument();
  
});