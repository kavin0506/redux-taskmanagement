import { useSelector } from "react-redux";

function Header (){

const{taskList}=useSelector((state)=>state.task)
// console.log(taskList)
    return(
        <div>
            <h2 className='text-center'>Task Management</h2>
            <p className="text-center">Current Task {taskList.length}</p>
        </div>
    )
}

export default Header;
