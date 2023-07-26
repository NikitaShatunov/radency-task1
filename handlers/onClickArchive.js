import { listOfAchives } from "../utils/archive.js";
import { filterArchiveList } from "../utils/archive.js";
const onClickArchive = (id) => {
  filterArchiveList(id);
};
export default onClickArchive;
