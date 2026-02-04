import {createSlice} from '@reduxjs/toolkit';

const jobSlice=createSlice({
    name:"jobs",
    initialState:{
        jobs:[],
        loading:false,
        error:null,
    },
    reducers:{
        fetchJobsStart:(state)=>{
            state.loading=true;
        },
        fetchJobsSuccess:(state,action)=>{
            state.loading=false;
            state.jobs=action.payload;
        },
        fetchJobsFailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
        addJobSuccess:(state,action)=>{
            state.jobs.push(action.payload);
        },
        updateJobStatusLocal:(state,action)=>{
            const {jobId,status}=action.payload;
            const index=state.jobs.findIndex(job=>job._id===jobId);
            if(index!==-1){
                state.jobs[index].status=status;
            }
        },
    }
});

export const { 
  fetchJobsStart, 
  fetchJobsSuccess, 
  fetchJobsFailure, 
  addJobSuccess, 
  updateJobStatusLocal 
} = jobSlice.actions;

export default jobSlice.reducer;