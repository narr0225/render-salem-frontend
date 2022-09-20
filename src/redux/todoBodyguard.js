import { createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const PORT = "https://server-backend-saleam.herokuapp.com/"

export const getTodosAsync = createAsyncThunk( // fetch data from api 1
    'Bodys/getTodosAsync',
    async () => {
        const response = await fetch(`${PORT}api/Bodyguard`);
        if(response.ok){
            const todos = await response.json();
            return { todos }
        }

    }
);



export const addTodoAsync = createAsyncThunk('Bodys/addTodoAsync',  // ADD DATA
    async(payload) => {
        const response = await fetch(`http://localhost:4000/api/Bodyguard`,{    // fetch จาก
            method: 'POST',                                             
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({title: payload.title}),                 //แปลงไฟล์ json
        });

        if(response.ok){
            const todo = await response.json();
            return { todo };                                             // response ok return ค่า
        }
    }   
);

export const toggleCompleteAsync = createAsyncThunk( // toggle ไม่ให้ reset
    'Bodys/completeTodoAsync',
    async(payload) => {
        const response = await fetch(`http://localhost:7000/todos/${payload.id}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({completed: payload.completed}),
        })

        if(response.ok){
            const todo =await response.json();
            return {id: todo.id, completed: todo.completed};
        }
        
    }
)



export const deleteTodoAsync = createAsyncThunk(
    'Bodys/deleteAsynce', 
    async(payload) =>{
        const response = await fetch(`${PORT}api/Bodyguard/${payload.id}`,{
            method: 'DELETE',
        })
        
        if(response.ok){
            return { _id: payload.id };                                            
        }
    }
)
// export const deleteTodoAsync = createAsyncThunk(
//     'todo/deleteAsynce', 
//     async(payload) =>{
//         const response = await fetch(`http://localhost:4000/todos`,{
//             method: 'DELETE',
//         })
        
//         if(response.ok){
//             return  { id: payload.id } ;                                            
//         }
//     }
// )

// const initialState = {
     
//     isLoading: true,
//   };

const bodySlice = createSlice({
    name: 'bodys',
    // initialState,  
    initialState:[],
    reducers:{
        addTodo: (state,action) => {
            const newTodo ={
                id: Date.now(),
                title: action.payload.title,
                completed: false,
            };
            state.push(newTodo);
        },
        toggleComplete:(state, action) => {
            const index = state.findIndex((todo)=> todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state,action) => {
            return state.filter((todo)=> todo.id !== action.payload.id);
        },
    },
    extraReducers:{
        [getTodosAsync.pending]:(state,action) => {
			console.log('fetching....')
            // state.isLoading = true; /// ต้องมีเสมอ
        },
        [getTodosAsync.fulfilled]:(state,action) => {  // GET export 1
            // state.isLoading = false;
            console.log('fetched')
            return action.payload.todos;
        },
        [addTodoAsync.fulfilled]: (state, action) => { // ADD  export 2
            state.push(action.payload.todo);
        },
        [toggleCompleteAsync.fulfilled]: (state,action) => {
            const index = state.findIndex((todo)=> todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
        [deleteTodoAsync.fulfilled]: (state,action) =>{
            return state.filter((todo)=> todo._id !== action.payload._id);   
        }
        // [deleteTodoAsync.fulfilled]: (state,action) =>{
        //     return []
        // }
    },
});

export const {addTodo,toggleComplete,deleteTodo} = bodySlice.actions;
export default bodySlice.reducer;

