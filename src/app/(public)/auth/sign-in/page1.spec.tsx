import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useSignUpState } from '@/stores/use-state-from-signup';
import SignUp from './page';

// Mocks para o useSignUpState
jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));

let isReadyAccount = false;

const mockSetIsReadyAccount = jest.fn(() => {
    isReadyAccount = true;
});

const mockSetIsNotReadyAccount = jest.fn(() => {
    isReadyAccount = false;
});

jest.mock('@/stores/use-state-from-signup', () => ({
    useSignUpState: () => ({
        isReadyAccount,
        setIsReadyAccount: mockSetIsReadyAccount,
        setIsNotReadyAccount: mockSetIsNotReadyAccount,
    }),
}));

describe('SignupPage', () => {
    it("deve renderizar a troca de estado alterando a interface de login", async () => {
        render(<SignUp />);
        // Verifica se a tela de  'Create an account' está sendo exibida
        await waitFor(() => {
            expect(screen.getByText(/Create an account/i)).toBeInTheDocument();
        });

        const button = screen.getByText("Log in");


        expect(isReadyAccount).toBe(false)
        expect(button).toBeInTheDocument();

        fireEvent.click(button);

        expect(mockSetIsReadyAccount).toHaveBeenCalled();


        expect(isReadyAccount).toBe(true)

        
    });

});
