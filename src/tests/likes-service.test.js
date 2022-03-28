/**
 * @jest-environment node
 */
import {userDislikesTuit, tuitDislikedByMe} from "../services/likes-service";
import {createUser, deleteUsersByUsername} from "../services/users-service";
import {createTuit, deleteTuitByUserId} from "../services/tuits-service";

describe('userDislikesTuit', () => {
    // // dummy user
    // const ripley = {
    //     username: 'ellenripley',
    //     password: 'lv426',
    //     email: 'ellenripley@aliens.com'
    // };
    // // sample tuit to insert
    // const sampleTuit = {
    //     tuit: 'I love this tuit',
    //     postedBy: ''
    // }
    // let dummyUser = "";
    //
    // // setup test before running test
    // beforeAll(async () => {
    //     // remove any/all users to make sure we create it in the test
    //     dummyUser = await createUser(ripley);
    //     sampleTuit.postedBy = dummyUser._id;
    //     return deleteTuitByUserId(sampleTuit.postedBy);
    // })
    //
    // // clean up after test runs
    // afterAll(() => {
    //     // remove any data we created
    //     deleteTuitByUserId(sampleTuit.postedBy);
    //     return deleteUsersByUsername(ripley.username);
    // })
    //
    // test('can insert new tuit with REST API', async () => {
    //     // insert new tuit in the database
    //     const newTuit = await createTuit(dummyUser._id, sampleTuit);
    //     // verify inserted tuit's properties match parameter tuit
    //     expect(newTuit.tuit).toEqual(sampleTuit.tuit);
    // });
});