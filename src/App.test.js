import {render,screen} from '@testing-library/react';
import App from './App';

test('renders Play All button', () => {
    render(<App />);
    const songElement  = screen.getByText(/Play All/i)
    expect(songElement).toBeInTheDocument();
})