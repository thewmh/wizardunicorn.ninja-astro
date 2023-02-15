import ThemeSelector from './theme';
import Navigation from './navigation';

export default function Header () {
    return (
        <header>
            <ThemeSelector />
            <Navigation />
        </header>
    )
}