import type {DecoratorFn, Story, StoryContext} from '@storybook/react';

import {ThemeProvider} from 'app/providers/ThemeProvider';

export const ThemeDecorator: DecoratorFn = (Story: Story, context: StoryContext) => {
    const theme = context.parameters.theme as string || context.globals.theme as string

    return (
        <ThemeProvider>
            <div className={`app ${theme}`}>
                <Story/>
            </div>
        </ThemeProvider>
    );
};