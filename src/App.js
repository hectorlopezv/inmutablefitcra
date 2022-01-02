import { ErrorBoundary} from "react-error-boundary"
import CryptoTable from "./components/CryptoTable/CryptoTable"

/**
 * Entry Point for Application.
 * @return {Component} with error boundary and Table of cryptos
 */
const App = () =>
{
return (

  <div
    className="flex 
    items-center
    p-8
    justify-center"
  >
    <ErrorBoundary
     fallbackRender={({error, resetErrorBoundary}) => (
      <div role="alert">
        <div>Oh no</div>
        <pre>{error.message}</pre>
        <button
          onClick={() => {
            resetErrorBoundary()
          }}
        >
          Try again
        </button>
      </div>
    )}
  >
    <CryptoTable />
    </ErrorBoundary>
    </div>
)
}

export default App;