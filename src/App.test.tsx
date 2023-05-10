import { render, screen } from '@testing-library/react';

import App from './App';

describe('', () => {
  it('should <App/> component', () => {
    render(<App />);
    // screen.debug();
    // expect(screen.queryByRole('button', { name: /btn/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /btn/i })).toBeInTheDocument();
  });
});
