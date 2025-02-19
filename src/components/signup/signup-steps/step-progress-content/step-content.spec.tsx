import { render, screen } from '@testing-library/react'
import { usePathname } from 'next/navigation'
import { StepProgressContent } from './step-progress-content'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

jest.mock('../step-progress', () => ({
  StepProgress: jest.fn(({ progress }) => (
    <div data-testid="step-progress">{progress ? 'checked' : 'unchecked'}</div>
  )),
}))
describe('StepProgressContent', () => {
  it('Renderiza corretamente para step2_andress', () => {
    ;(usePathname as jest.Mock).mockReturnValue('step1_Profile')

    render(<StepProgressContent />)

    const steps = screen.getAllByTestId('step-progress')

    expect(steps[0]).toHaveTextContent('checked')
    expect(steps[1]).toHaveTextContent('unchecked')
    expect(steps[2]).toHaveTextContent('unchecked')
  })

  it('Renderiza corretamente para step3_storeInformation', () => {
    ;(usePathname as jest.Mock).mockReturnValue('step3_storeInformation')

    render(<StepProgressContent />)

    const steps = screen.getAllByTestId('step-progress')

    expect(steps[0]).toHaveTextContent('checked')
    expect(steps[1]).toHaveTextContent('checked')
    expect(steps[2]).toHaveTextContent('unchecked')
  })

  it('Renderiza corretamente para step1_Profile', () => {
    ;(usePathname as jest.Mock).mockReturnValue('step1_Profile')

    render(<StepProgressContent />)

    const steps = screen.getAllByTestId('step-progress')

    expect(steps[0]).toHaveTextContent('checked')
    expect(steps[1]).toHaveTextContent('unchecked')
    expect(steps[2]).toHaveTextContent('unchecked')
  })
})
