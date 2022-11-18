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
    render(<UiCalc />)
    const ip = screen.getByTestId('num2')
    fireEvent.change(ip, { target : { value : '-10' }  })

    const stsLbl = screen.getByTestId('num2Sts')
    expect(stsLbl.textContent).toBe('❌')
})

test('check addition', () => {
    render(<UiCalc />)

    const ip1 = screen.getByTestId('num1')
    fireEvent.change(ip1, { target : { value : '35' }  })

    const stsLbl1 = screen.getByTestId('num1Sts')
    expect(stsLbl1.textContent).toBe('✅')

    const ip2 = screen.getByTestId('num2')
    fireEvent.change(ip2, { target : { value : '20' }  })

    const stsLbl2 = screen.getByTestId('num2Sts')
    expect(stsLbl2.textContent).toBe('✅')

    const btn = screen.getByText('Addition')
    fireEvent.click(btn)

    const resLbl = screen.getByTestId('result')
    expect(resLbl.textContent).toBe('55')
})

