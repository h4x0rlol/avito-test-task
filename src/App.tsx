import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { NewsPage } from './pages/NewsPage';
import { NotFoundPage } from './pages/NotFoundPage';

const App = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Switch />
			<Route path="/:page" exact>
				<MainPage />
			</Route>
			<Route path="/news/:id" exact>
				<NewsPage />
			</Route>
			<Route path="/" exact>
				<Redirect to="/1" />
			</Route>
			<Route>
				<NotFoundPage />
			</Route>
			<Switch />
		</BrowserRouter>
	);
};

export default App;
