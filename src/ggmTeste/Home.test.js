// Home.test.js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Import userEvent
import Home from '../compohome/Home';

test('renderiza o título principal', () => {
    render(<Home />);
    const tituloElement = screen.getByText(/Explore Salvador da forma mais acessível para você/i);
    expect(tituloElement).toBeInTheDocument();
});

test('carrega a imagem principal corretamente', () => {
    render(<Home />);
    const imagemElement = screen.getByAltText('Imagem Principal');
    expect(imagemElement).toBeInTheDocument();
});

test('verifica o redirecionamento do botão "Sobre o nosso site"', () => {
    render(<Home />);
    const botaoElement = screen.getByText('Sobre o nosso site');
    expect(botaoElement.closest('a')).toHaveAttribute('href', '/sobreosite');
});

test('exibe a descrição sobre "Guias por Localização"', () => {
    render(<Home />);
    const descricaoElement = screen.getByText(/Nosso guia por localização é a ferramenta perfeita para explorar destinos turísticos de forma fácil e conveniente./i);
    expect(descricaoElement).toBeInTheDocument();
});

test('verifica o hover no botão "Contato"', () => {
    render(<Home />);
    const botaoContato = screen.getByText('Contato');
    
    // Simula o hover no botão "Contato"
    userEvent.hover(botaoContato);

    // Verifica se a classe de hover está presente
    expect(botaoContato).toHaveClass('btn-hover-color');
});
