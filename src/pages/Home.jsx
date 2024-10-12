import CharacterList from "../components/CharacterList"
import ErrorFallback from "../components/ErrorFallback"
import { ErrorBoundary } from 'react-error-boundary';

const Home = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
        <CharacterList/>
        </ErrorBoundary>
    )
}

export default Home