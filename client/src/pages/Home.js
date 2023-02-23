import React, { useEffect } from "react";
import axios from "axios";
function Home() {
  const getdata = async () => {
    try {
      const response = await axios.post("/api/user/getuserinfo",{},
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    (async () => {
      getdata();
    })();
  }, []);
  return (
    <div>
      <h1>hiii</h1>
    </div>
  );
}
export default Home;
