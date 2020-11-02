import { render, screen } from '@testing-library/react';
import App from './App';

describe ('App' , () => {
  it('Test', () => {
    const app = render(<App />);
    expect(screen.getByText(/learn react & testing library/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/label/i)).toBeInTheDocument();
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/...input/i)).toBeInTheDocument();
  })
});
