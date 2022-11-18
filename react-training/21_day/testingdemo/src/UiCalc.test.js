import { render, screen , fireEvent} from '@testing-library/react';



import { UiCalc } from './UiCalc';

test('renders UI Calc Component', () => {
    render(<UiCalc />);
    const title = screen.getByText(/calculator/i);
    expect(title).toBeInTheDocument();
});

test('check num1 input working', () => {
    
   render(<UiCalc />)

    const ip = screen.getByTestId('num1')

    fireEvent.change(ip, { target : { value : '10' }  })

    expect(ip.value).toBe('10')
})

test('check num1 validity 34 and 78', () => {
    render(<UiCalc />)
    const ip = screen.getByTestId('num1')
    fireEvent.change(ip, { target : { value : '10' }  })

    const stsLbl = screen.getByTestId('num1Sts')
    expect(stsLbl.textContent).toBe('❌')
})

test('check num2 is positive only', () => {
    
    expect(false).toBe(true)
})