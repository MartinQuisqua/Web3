import { ProviderWrapper as CounterProvider } from 'contexts/opinionContext';
import App from './App';

const AppLoader = () => {
  return (
    <CounterProvider>
      <App />
    </CounterProvider>
  );
};

export default AppLoader;
