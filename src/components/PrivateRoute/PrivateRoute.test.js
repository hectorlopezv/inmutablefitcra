import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import React from "react";
import PrivateRoute from "./PrivateRoute"
jest.mock("react-router-dom",()=> {
    return {
        Navigate: ({to}) => { return <div>Redirected {to}</div> }
    }
})

describe("Private Route component test", () => {

    it("check if the Private route is working as expected", () => {
        const { rerender, debug } = render(<PrivateRoute />)
        expect(screen.getByText(/Redirected/i)).toBeInTheDocument()
    })



});
