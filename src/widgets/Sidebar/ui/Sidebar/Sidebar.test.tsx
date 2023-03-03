import { Sidebar } from './Sidebar'
import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/componentRender/componentRender'

describe('Sidebar', () => {
    test('Test render', () => {
        const mockToggle = jest.fn()
        componentRender(<Sidebar collapsed={false} toggleCollapse={mockToggle} />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
})
