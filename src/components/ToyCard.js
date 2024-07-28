import React, {useState} from "react";

function ToyCard({name, image, likes, id, donate, like}) {
  function handleLike() {
    like(id, localLikes);
    setLocalLikes(localLikes + 1);
  }
  const [localLikes, setLocalLikes] = useState(likes)
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn"onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={()=>donate(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
