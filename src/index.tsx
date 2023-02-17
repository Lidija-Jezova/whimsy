import { createRoot } from 'react-dom/client'
import App from 'app/App'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import 'shared/config/i18n/i18n'

const container = document.getElementById('root') as Element
const root = createRoot(container)
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
)
