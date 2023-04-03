import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { history } from '@shared/lib';
import { App } from '@app';
import { store } from '@store';
import '@styles';

const root = createRoot(document.getElementById('root') as Element);
root.render(
  <HistoryRouter history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </HistoryRouter>
);
