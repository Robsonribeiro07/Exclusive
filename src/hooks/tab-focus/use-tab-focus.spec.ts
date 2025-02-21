import { renderHook, act } from '@testing-library/react'
import { useTabFocus } from './use-tab-focus'

describe('UseTabFocus', () => {
  it('Deve retornar true caso o usuario tenha focado na pagina', () => {
    const { result } = renderHook(() => useTabFocus())

    expect(result.current).toBe(true)
  })
  it('Deve retornar false caso o usuario nao tenha focado na pagina', () => {
    const { result } = renderHook(() => useTabFocus())

    act(() => {
      Object.defineProperty(document, 'hidden', {
        value: true,
        configurable: true,
      })
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(result.current).toBe(false)
  })
  it('Deve retornar true novamente caso o usario tenha retornado a pagina', () => {
    const { result } = renderHook(() => useTabFocus())

    act(() => {
      Object.defineProperty(document, 'hidden', {
        value: true,
        configurable: true,
      })
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(result.current).toBe(false)
    act(() => {
      Object.defineProperty(document, 'hidden', {
        value: false,
        configurable: true,
      })
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(result.current).toBe(true)
  })
})
