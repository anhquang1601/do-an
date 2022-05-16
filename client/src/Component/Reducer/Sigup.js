const initialState = {
  isLoading: false,
  user: [],
  error: false,
};
const sigupReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case "ISLOADING_SIGIN":
      return {
        ...state,
        isLoading: true,
      };
     case "GET_SUCCESS":
        return{
            ...state,user:action.users,  isLoading: false,
        } 
    case "POST_SUCCESS":
      
      return {
        ...state,user:[...state.user,action.values],
        error: false,
        isLoading: false,
      };
    case "POST_ERROR":
      return {
        ...state,
        error: true,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default sigupReducer;
