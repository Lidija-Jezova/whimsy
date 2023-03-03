import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
    test('with only 1st param', () => {
        expect(classNames('someClass', {}, [])).toBe('someClass')
    })

    test('with additional classes', () => {
        expect(classNames('someClass', {}, ['addClass1 addClass2'])).toBe(
            'someClass addClass1 addClass2',
        )
    })

    test('with additional classes2', () => {
        expect(classNames('', {}, ['addClass1 addClass2'])).toBe('addClass1 addClass2')
    })

    test('with all params', () => {
        const expected = 'someClass addClass1 addClass2 hovered'
        expect(
            classNames('someClass', { hovered: true, hidden: false }, ['addClass1 addClass2']),
        ).toBe(expected)
    })

    test('with all params2', () => {
        const expected = 'someClass addClass1 addClass2 hovered hidden'
        expect(
            classNames('someClass', { hovered: true, hidden: true }, ['addClass1 addClass2']),
        ).toBe(expected)
    })
})
