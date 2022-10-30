import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Article } from './pages/Article';
import { Main } from './pages/Main';
import { NotFound } from './pages/NotFound';

const App = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Switch />
			<Route path="/:page" exact>
				<Main />
			</Route>
			<Route path="/article/:id" exact>
				<Article />
			</Route>
			<Route path="/notfound" exact>
				<NotFound />
			</Route>
			<Route path="/" exact>
				<Redirect to="/1" />
			</Route>
			<Switch />
		</BrowserRouter>
	);
};

export default App;
