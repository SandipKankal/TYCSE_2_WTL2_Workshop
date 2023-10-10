export default function apptodo(){
    function HandleToDo(event){
        console.log('invoked')
    }
    return{
        <form onSubmit={HandleToDo}>
        <><input placeholder="apptodo"></input><button type="submit">Submit</button></>
        </form>
    }
}