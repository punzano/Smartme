import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MPIxPage from './webapp/containers/MPIxPage';

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route exact path="/" element={<Navigate to="/ranking/mpix"/>}/>
			<Route exact path="/ranking/mpix" element={<MPIxPage/>}/>
		</Routes>
	</BrowserRouter>
);

export default App;
