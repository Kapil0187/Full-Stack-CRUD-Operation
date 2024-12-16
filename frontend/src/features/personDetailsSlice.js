import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createPerson = createAsyncThunk(
  "createPerson", async (data, {rejectedWithValue}) =>{
    console.log("data",data);
    try{
      const response = await axios.post("http://localhost:3000/people",data)
      return response.data;
    }catch(error){
      return rejectedWithValue(error);
    }
   }
)

export const peopleList = createAsyncThunk(
  "peopleList", async (data,{rejectedWithValue}) => {
    try{
      const response = await axios.get("http://localhost:3000/people");
      return response.data;
    }catch(error){
      return rejectedWithValue(error.response?.data || error.message);
    }
  }
)

export const updatePerson = createAsyncThunk(
  "updatePeron", async (data,{rejectedWithValue}) => {
    console.log("update", data)
    try{
      const response = await axios.put(`http://localhost:3000/people/${data.id}`,data);
      return response.data;
    }catch(error){
      return rejectedWithValue(error);
    }
  }
)

export const deletePerson = createAsyncThunk(
  "deletePerson", async (id, {rejectedWithValue}) =>{
    try{
      const response = await axios.delete(`http://localhost:3000/people/${id}`)
      return id;
    }catch(error){
      return rejectedWithValue(error);
    }
  }
)

export const personDetails = createSlice({
  name: "personDetails",
  initialState: {
    persons : [],
    loading: false,
    error: null,
  },
  reducers:{},
  extraReducers:(builder) => {
    builder
      .addCase(createPerson.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPerson.fulfilled, (state,action) => {
        state.loading = false;
        state.persons.push(action.payload)
      })
      .addCase(createPerson.rejected, (state,action) => {
        state.loading = false;
        state.persons = action.payload;
      })
      .addCase(peopleList.pending, (state) => {
        state.loading = true;
      })
      .addCase(peopleList.fulfilled, (state,action) => {
        state.loading = false;
        state.persons = action.payload
      })
      .addCase(peopleList.rejected, (state,action) => {
        state.loading = false;
        state.persons = action.payload;
      })
      .addCase(deletePerson.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePerson.fulfilled,(state,action) => {
        state.loading = false;
        state.persons = state.persons.filter((person) => person.id !== action.payload);
      })
      .addCase(deletePerson.rejected,(state,action) => {
        state.loading = false;
        state.persons = action.payload;
      })
      .addCase(updatePerson.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePerson.fulfilled,(state,action) =>{
        state.loading = false
        state.persons = state.persons.map((person) =>
          person.id === action.payload.id ? action.payload : person
        );
      })
      .addCase(updatePerson.rejected,(state,action) => {
        state.loading = false;
        state.persons = action.payload;
      })
  }
})

export default personDetails.reducer