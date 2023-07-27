import { listOfAchives } from "../utils/store.js";
import { filterArchiveList } from "../utils/store.js";
const onClickArchive = (id) => {
  filterArchiveList(id);
};
export default onClickArchive;
