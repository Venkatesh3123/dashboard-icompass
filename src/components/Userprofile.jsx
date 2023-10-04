import "../components/userProfile.css";

export default function Userprofile() {
  return (
    <>
      <div className="main-container">
        <div className="main-div1">
          <h2 className="j3">User Profile</h2>
          <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"></img>
          <div className="sub-div1">
            <div>
              {" "}
              <h4>Name:</h4>
            </div>
            <div>
              <p className="pf">Mr.Jockey</p>
            </div>
          </div>
          <div className="sub-div1">
            <div>
              {" "}
              <h4>Email:</h4>
            </div>
            <div>
              {" "}
              <p className="pf">jockey@gmail.com</p>
            </div>
          </div>
          <div className="sub-div1">
            <div>
              {" "}
              <h4>Mobile:</h4>
            </div>
            <div>
              {" "}
              <p className="jh">8735426289</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
