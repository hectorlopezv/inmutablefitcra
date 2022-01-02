import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import { render as rtlRender } from '@testing-library/react'



const Wrapper = ({ children, path}) => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path={path} element={children} index />
        </Routes>
    </BrowserRouter>
    );
};
  

const render = (ui,  options = {}) =>
    rtlRender(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react'
// override React Testing Library's render with our own
export { render }