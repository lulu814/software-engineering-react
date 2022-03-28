import { act } from 'react-dom/test-utils';
import Profile from "../components/profile/index"
import MyDislikes from "../components/profile/my-dislikes"
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";

const MOCKED_USER = {username: "alice", _id: "123"};
const MOCKED_TUIT =
    [{tuit: "alice's tuit", postBy: "123", _id: "1231", stats: {likes: 31, dislikes: 11}}];
// mock axios with the create
const mockAxios = jest.genMockFromModule('axios')
mockAxios.create = jest.fn(() => mockAxios)

test('renders dislikes tab on profile', async() => {
    mockAxios.get.mockImplementation(() =>
        Promise.resolve({ data: MOCKED_USER }));
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act( async () => render(
        <HashRouter>
            <Profile />
        </HashRouter>
    ));

    const dislikeTab = screen.getByText(/Dislikes/i);
    expect(dislikeTab).toBeInTheDocument();
})

// test('renders disliked tuit under dislike screen', async() => {
//     mockAxios.get.mockImplementation(() =>
//         Promise.resolve({ data: MOCKED_TUIT }));
//     // eslint-disable-next-line testing-library/no-unnecessary-act
//     await act( async () => render(
//         <HashRouter>
//             <MyDislikes />
//         </HashRouter>
//     ));
//
//     const dislikeTuit = screen.getByText(/alice's tuit/i);
//     expect(dislikeTuit).toBeInTheDocument();
// })