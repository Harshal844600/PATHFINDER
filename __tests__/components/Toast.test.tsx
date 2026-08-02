import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ToastProvider, useToast } from '@/components/ui/Toast'

// Mock framer-motion to avoid complex animation testing issues
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, layout, initial, animate, exit, transition, ...props }: any) => (
      <div {...props}>{children}</div>
    )
  },
  AnimatePresence: ({ children }: any) => <>{children}</>
}))

const TestComponent = () => {
  const { toast } = useToast()
  return (
    <button onClick={() => toast("Test success message", "success")}>
      Show Toast
    </button>
  )
}

describe('Toast System', () => {
  it('renders a toast when triggered', async () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    )
    
    const button = screen.getByText('Show Toast')
    act(() => {
      button.click()
    })
    
    expect(screen.getByText('Test success message')).toBeInTheDocument()
  })
})
