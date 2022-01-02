import {render, screen} from '@testing-library/react'
import React from "react";
import Spinner from "./Spinner"

describe("Spinner component test", () => {

    it("check if the spinner is rendered", () => {

        const { rerender, debug } = render(<Spinner />)
        expect(screen.getByRole('status', {
            name: /loading/i
          })).toBeInTheDocument()
    })



});
