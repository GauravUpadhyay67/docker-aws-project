import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('Home Page', () => {
    it('renders Hello World heading', () => {
        render(<Home />);
        expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
    });
});
