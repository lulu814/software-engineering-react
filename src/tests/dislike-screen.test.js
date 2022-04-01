/**
 * @file Implement unit tests for dislike screen.
 */
import React from 'react'
import {act, create} from "react-test-renderer"
import Profile from "../components/profile/index"
import MyDislikes from "../components/profile/my-dislikes"
import {screen, render, fireEvent} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import axios from "axios";
import TuitStats from "../components/tuits/tuit-stats";
import Tuits from "./react-test-renderer/tuits/tuits";
import tuitsJson from "./react-test-renderer/tuits/tuits.json";
const MOCKED_USER = {username: "alice", _id: "123"};
const MOCKED_TUIT =
    [{tuit: "alice's tuit", postBy: "123", _id: "1231", stats: {likes: 31, dislikes: 11}},
        {tuit: "bob's tuit", postBy: "153", _id: "1253", stats: {likes: 131, dislikes: 211}}];

jest.mock("axios");
console.error = () => {};
test('renders dislikes tab on profile', async() => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act( async () => render(
        <HashRouter>
            <Profile />
        </HashRouter>
    ));

    const dislikeTab = screen.getByText(/Dislikes/i);
    expect(dislikeTab).toBeInTheDocument();
})

test('renders a list of tuits on the screen', () => {
    let tuitsRender
    act(() => {
        tuitsRender = create(
            <Tuits
                tuits={MOCKED_TUIT}/>
        )
    })
    const root = tuitsRender.root
    // eslint-disable-next-line testing-library/await-async-query
    const ttrTuits = root.findAllByProps({
        className: 'ttr-tuit'})
    expect(ttrTuits.length).toBe(MOCKED_TUIT.length)
    ttrTuits.forEach((ttrTuit, ndx) => {
        // eslint-disable-next-line testing-library/no-node-access
        expect(ttrTuit.props.children).toBe(MOCKED_TUIT[ndx].tuit)
    })
})
// test('renders disliked tuit under dislike screen', async() => {
//     axios.get.mockImplementation(() => Promise.resolve({ data: MOCKED_TUIT }));
//
//
//     // eslint-disable-next-line testing-library/no-unnecessary-act
//     // await act( async () => render(
//     //     <HashRouter>
//     //         <MyDislikes />
//     //     </HashRouter>
//     // ));
//     //
//     // const dislikeTuit = screen.getByText(/alice's tuit/i);
//     // expect(dislikeTuit).toBeInTheDocument();
//     let tuitsRender
//     act(() => {
//         tuitsRender = create(
//             <MyDislikes />
//         )
//     })
//
// // Stub the initial state
//     const stubInitialState = MOCKED_TUIT
//
// // Mock useState before rendering your component
//     React.useState = jest.fn().mockReturnValue([stubInitialState, {}])
//     const root = tuitsRender.root
//     // eslint-disable-next-line testing-library/await-async-query
//     const ttrTuits = root.findAllByProps({
//         className: 'ttr-tuit'})
//     console.log(ttrTuits)
// })