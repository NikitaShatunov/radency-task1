import { filterDeletedList } from "../utils/store.js";
import { listOfAchives } from "../utils/store.js";
const onClickDelete = (id) => {
  if (window.confirm("Are you sure?")) filterDeletedList(id);
};
export default onClickDelete;
