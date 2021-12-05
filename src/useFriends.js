import { useState } from "react";

const useFriends = () => {
  const [AllFriends, setAllFriends] = useState([]);

  return AllFriends;
};

export default useFriends;
