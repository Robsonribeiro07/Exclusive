import {
  render,
  screen,
  act,
  renderHook,
  waitFor,
} from '@testing-library/react'
import { Countdowm } from './countdowm'
import { UseCountdown } from '@/hooks/use-conntwdown'

jest.mock('@/hooks/use-conntwdown', () => ({
  UseCountdown: jest.requireActual('@/hooks/use-conntwdown').UseCountdown,
}))

describe('Countdown Component', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('Deve renderizar corretamente o countdown com a data real', () => {
    render(<Countdowm />)

    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('Deve Atualiza a data ao longo do tempo', async () => {
    const { result } = renderHook(() => UseCountdown({ date: '2025-02-21' }))

    await waitFor(
      () => {
        expect(result.current.timeLeft.seconds.value).toBeGreaterThan(0)
      },
      { timeout: 3000 }
    )

    const initialSeconds = result.current.timeLeft.seconds.value

    await waitFor(
      () => {
        expect(result.current.timeLeft.seconds.value).toBeLessThan(
          initialSeconds
        )
      },
      { timeout: 3000 }
    )
  })
})
