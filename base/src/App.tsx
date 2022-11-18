import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { router } from './router';
import LayoutBanner from './Layout';
import QianKunPage from './qiankunPage';
function App() {
    return (
        <HashRouter>
            <Routes>
                {router.map(item => (
                    <Route path={item.path} element={<LayoutBanner />}>
                        {item.children.map(cld => (
                            <Route path={cld.path} element={<QianKunPage />} />
                        ))}
                    </Route>
                ))}
            </Routes>
        </HashRouter>
    );
}

export default App;
