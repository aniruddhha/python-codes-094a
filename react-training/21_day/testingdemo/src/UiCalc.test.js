import { render, screen } from '@testing-library/react';

import { UiCalc } from './UiCalc';

test('renders UI Calc Component', () => {
    render(<UiCalc />);
    const title = screen.getByText(/Calculator/i);
    expect(title).toBeInTheDocument();
  });