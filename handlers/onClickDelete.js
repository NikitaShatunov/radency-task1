import { filterDeletedList } from "../utils/archive.js";
import { listOfAchives } from "../utils/archive.js";
const onClickDelete = (id) => {
  if (window.confirm("Are you sure?")) filterDeletedList(id);
};
export default onClickDelete;
