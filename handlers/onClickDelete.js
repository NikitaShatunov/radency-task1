import { filterDeletedList } from "../assets/img/utils/archive.js";
import { listOfAchives } from "../assets/img/utils/archive.js";
const onClickDelete = (id) => {
    if(window.confirm('Are you sure?')) filterDeletedList(id)
}
export default onClickDelete