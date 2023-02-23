import { Button } from './Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
    test('Test render', () => {
        render(<Button>test</Button>)
        expect(screen.getByText('test')).toBeInTheDocument()
    })

    test('Button has clear class', () => {
        render(<Button variant={'clear'}>test</Button>)
        expect(screen.getByText('test')).toHaveClass('clear')
        screen.debug()
    })
})
