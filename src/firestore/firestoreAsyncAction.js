import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from './firestoreDB';

export const getUsersAction = createAsyncThunk('user/getUsersAction', async () => {
    const response = await getUsers()
    if (response) {
        return response
    }
});