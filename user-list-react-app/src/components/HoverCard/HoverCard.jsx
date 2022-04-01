import React from "react";
import "./HoverCard.css";
import activeImage from "../../assets/Active.jpg";
import noUserImage from "../../assets/NoUser.jpeg";
import { useSelector } from "react-redux";

function Card() {
  const UserData = useSelector((state) => state.fetchedData);
  const HoveredID = useSelector((state) => state.initialId);
  const User = UserData ? UserData.find((user) => user.id === HoveredID) : [];

  if (typeof HoveredID !== "number") {
    return (
      <div className="hover-card">
        <img src={noUserImage} alt="" />
        <div className="no-user-text">
          <strong>Nothing To Show !</strong>
          <strong>
            Please hover over the user to see more details of user.
          </strong>
        </div>
      </div>
    );
  } else {
    if (User) {
      return (
        <div className="hover-card">
          <img className="avatar" src={User.avatar} alt="img" />

          <h3>
            {User.first_name} {User.last_name}
            {User.id === 1 && (
              <img
                style={{ height: 10, width: 15, marginBottom: 7 }}
                src={activeImage}
                alt="img"
              />
            )}
          </h3>

          <p style={{ opacity: 0.6 }}>{User.email}</p>
          <h3>Your Plan: Standard</h3>
          <button className="card-active-button">Active User</button>
          <div className="user-meter">
            <p>Plan Uses</p>
            <meter id="disk_c" value="6" min="0" max="10" />
          </div>

          <div className="click-detail">
            <div>
              <h3>2,450</h3>
              <p style={{ fontSize: 12, opacity: 0.8 }}>Clicks reviewed</p>
            </div>
            <div className="click-bar"></div>
            <div>
              <h3>5,000</h3>
              <p style={{ fontSize: 12, opacity: 0.8 }}>Monthly Clicks</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="hover-card">
          <img src={noUserImage} alt="" />
          <div className="no-user-text">
            <strong>Nothing To Show !</strong>
            <strong>
              Please hover over the user to see more details of user.
            </strong>
          </div>
        </div>
      );
    }
    // return (
    //   <div className="hover-card">

    //     <img className="avatar" src = { User.avatar} alt="img" />

    //     <h3 >
    //       { User.first_name} { User.last_name}
    //      {User.id===1 &&  <img style={{height:10, width:15 ,marginBottom:7 }} src={activeImage} alt="img" />}
    //     </h3>

    //     <p style={{ opacity: 0.6 }}>{ User.email}</p>
    //     <h3>Your Plan: Standard</h3>
    //     <button className="card-active-button">Active User</button>
    //     <div className="user-meter">
    //     <p>Plan Uses</p>
    //     <meter id="disk_c" value="6" min="0" max="10" />
    //     </div>

    //     <div className="click-detail">
    //       <div>
    //         <h3>2,450</h3>
    //         <p style={{fontSize:12,opacity:0.8}}>Clicks reviewed</p>
    //       </div>
    //       <div className="click-bar"
    //       ></div>
    //       <div>
    //         <h3>5,000</h3>
    //         <p style={{fontSize:12,opacity:0.8}}>Monthly Clicks</p>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default Card;
