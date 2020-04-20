import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Episodes from './Episodes'

import { act } from "react-dom/test-utils"
import { apiData } from '../testAPIdata'

test ("selected season data displays", async () => {
    
    const { getByText } = render(<Episodes episodes = {apiData.data._embedded.episodes}/>)

    // console.log(apiData.data._embedded.episodes)
    //arrange

    //let's see if we can find season 2 episode 1

    const season2E1 = getByText("Season 2, Episode 1")

    //act

    //assert

})