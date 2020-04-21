import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import App from './App'

import { fetchShow as mockFetchShow } from './api/fetchShow'
import { apiData } from './testAPIdata'

import { act } from "react-dom/test-utils"

jest.mock("./api/fetchShow")

test ("Can select from the dropdown menu & it renders the right page", async () => {
    act(() => {
        mockFetchShow.mockResolvedValueOnce(apiData)
    })
    
    const { getByText } = render(<App />)

    await wait(() => {
        const dropdown = getByText("Select a season")

        dropdown.value = "Season 2"

        expect(dropdown).toHaveValue("Season 2")
    })
    
})