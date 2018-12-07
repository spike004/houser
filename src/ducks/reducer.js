const initialState={
    propertyname:'',
    address:'',
    city:'',
    state:'',
    zip:0
}
const CREATEPROPERTY ='CREATEPROPERTY'
export function createProperty(){
    return{
        type:CREATEPROPERTY,
        payload:''
    }
}
export default function reducer(state=initialState,action){
    switch(action.type){
        case CREATEPROPERTY:
        return{...state,'':action.payload}
        default:return state;
    }
}