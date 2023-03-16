import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../API/auth';

export const register = createAsyncThunk(
  'auth/register', async (data, { rejectWithValue }) => {
    try { 
      const result = await api.register(data)
      return result
    }
    catch ({ response }) {
      return rejectWithValue(response.data)
    }
  }
)

export const login = createAsyncThunk(
  'auth/login', async (data, { rejectWithValue }) => {
    try { 
      const result = await api.login(data)
      return result
    }
    catch ({ response }) {
      return rejectWithValue(response.data)
    }
  }
)

export const logout = createAsyncThunk(
  'auth/logout', async (_, { rejectWithValue }) => {
    try { 
      const result = await api.logout();
      return result;
    }
    catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
)