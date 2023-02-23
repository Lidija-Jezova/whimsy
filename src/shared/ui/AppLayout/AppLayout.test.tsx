import AppLayout from './AppLayout'
import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('App layout', () => {
    test('Test render', () => {
        render(<AppLayout />, { wrapper: BrowserRouter })
        expect(screen.getByTestId('app-layout')).toBeInTheDocument()
    })

    test('App layout has class collapsed', () => {
        render(<AppLayout />, { wrapper: BrowserRouter })
        expect(screen.getByTestId('app-layout')).toBeInTheDocument()
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('app-layout')).toHaveClass('collapsed')
    })
})
