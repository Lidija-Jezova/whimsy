import { Sidebar } from './Sidebar'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation'

describe('Sidebar', () => {
    test('Test render', () => {
        const mockToggle = jest.fn()
        renderWithTranslation(<Sidebar toggleCollapse={mockToggle} />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
})
