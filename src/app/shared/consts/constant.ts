import { TodoPriority } from "../enums/todo-priority";

export const COMMON = {
    ADDEDTASK: "Task Added successfully",
    PRIORITY : [
        {name: "LOW", priority :TodoPriority.LOW},
        {name: "NORMAL", priority :TodoPriority.NORMAL},
        {name: "HIGH", priority :TodoPriority.HIGH}
    ],
    EMPTYFIELD: "Please fill all field",
    SYSTEMISSUE: "Something went wrong"
}