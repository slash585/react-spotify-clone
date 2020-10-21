export const initialState = {
    user:null,
    playlists:[],
    spotify:null,
    discover_weekly:null,
    top_artist:null,
    playing:false,
    item:null,
    //Remove after finished development
    //token: 'BQBz8sDSyxWs0YTQpKADAmW2fVdLds_4j8dgu3hdCmwEnYHSDwIAW4azQH1owOYTC21fufy1KThR2eGcJxdV53hGqa6kZGzrxO3zL7lm3jlPFu3vN9Kzwo_oOQCqe7s5HeyNQUApv3WYImLRoorkvA7V'
};

const reducer = (state,action) => {
   console.log(action)
   
   switch(action.type){
       case 'SET_USER':
           return{
               ...state,
               user: action.user
           }

        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            }
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists:action.playlists
            }
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly:action.discover_weekly
            }
           
        default:
            return state;
   }
}

export default reducer;