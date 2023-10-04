import "../components/notification.css";
import { useState } from "react";
export default function Notification() {
  const [data1, setData1] = useState(false);
  const [info, setInfo] = useState(null);
  const [check, setCheck] = useState(false);

  let data = [
    {
      id: "0",
      message: "IBM India - Complete Additional Information",
      info: "Dear VENKATESH KUMAR DONTHU,Reference to your IBM job application for the position . We request you to kindly complete the form by clicking on the below link:Candidate InformationPlease complete the form within 24 hours from receipt of this email to enable us to review your candidature further.Beware of misleading advertisements and fraudulent communication issuing 'offer letters' on behalf of IBM in exchange for a fee. Please look for an authentic IBM email id - XYZ@in.ibm.com to avoid getting duped.Stay Alert! Read more here http://ibm.co/2fwBkyKBest RegardsIBM India Recruitment TeamYour reference number is: 8805729",
    },
    {
      id: "1",
      message: "Global Ambition and others are hiring. Apply now!",
      info: "(Your Designation)UPDATEHave you heard? Profiles with 100% completion scores get 3X the visibility, and your current profile score is 87%.Have a great day and good luck!Team foundit(Formerly Monster)",
    },
    {
      id: "2",
      message: "New jobs posted by Eastman",
      info: "The following jobs matched your search agent at Eastman and can be found at jobs.eastman.com. Agent:Front End Developer - React.JS, Hyderabad IN(Click to modify)Job Matches:Recruiting Professional - Career - Hyderabad, IN, 500 008Business Intelligence Developer - Hyderabad, IN, 500 008Buyer - Experienced - Hyderabad, IN, 500 008 Remember to forward these jobs to any of your friends who might have interest in any of these positions.Getting these notifications too often?Change the frequency here.Add another agent.",
    },
    {
      id: "3",
      message: "Greetings from Zoho",
      info: "At Zoho, our mission is to enable young men and women to achieve self-sufficiency, ng on my parents economically after college? If the answer is yes Zoho would be the wrong company",
    },
  ];

  const selectedItem = (info) => {
    setData1(true);
    setInfo(info);
  };
  const back = () => {
    setData1(false);
  };

  let data2 = data.map((item) => {
    return (
      <>
        <li
          key={item.id}
          onClick={() => selectedItem(item.info)}
          className="li1"
        >
          <input type="checkbox"></input>
          {item.message}
        </li>
      </>
    );
  });
  console.log(check.value);
  return (
    <>
      {data1 ? (
        <div className="div-not1">
          <div> {info}</div>
          <button onClick={back} className="back">
            Back
          </button>
        </div>
      ) : (
        <div className="div-not">
          <ul className="ul1">
            <h2 className="j1">Notifications</h2>
            {data2}
          </ul>
        </div>
      )}
    </>
  );
}
