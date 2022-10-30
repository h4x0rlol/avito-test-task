import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { Loader } from './components/Loader';
import './index.css';
import { setupStore } from './store/store';

const store = setupStore();

ReactDOM.render(
	<React.StrictMode>
		<Suspense fallback={<Loader />}>
			<Provider store={store}>
				<App />
			</Provider>
		</Suspense>
	</React.StrictMode>,
	document.getElementById('root')
);
