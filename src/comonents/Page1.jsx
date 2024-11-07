import { useContext } from "react";
import "./Page1.css";
import { PlanContext } from "../context";

function Page1() {
  const { user,setUser } = useContext(PlanContext);
  // const [userInfo,setUserInfo] = useState({
  //     your_plan:'',
  //     email:'',
  //     mobile:'',
  //     address1:'',
  //     address2:'',
  //     pincode:'',
  //     state:'',
  //     range:''
  // });
  const plans = [
    {},
    { title: "One (Individual)", head: "Self", price: "$600" },
    { title: "Pro (Individual)", head: "Parents", price: "$0" },
    {
      title: "Plus (Individual + Individual)",
      head: "Self + Parents",
      price: "$600",
    },
    { title: "Max (Floater)", head: "Self + Spouse + Kids", price: "$1800" },
    { title: "Grand (Floater + Individual)", head: "Self", price: "$600" },
  ];
  const options = [
    "",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam, Bihar",
    "Chhattisgarh",
    " Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Benga",
  ];
  const handleState = (e, setState, field) => {
    setState((prev) => ({ ...prev, [field]: e.target.value }));
  };
  return (
    <div className="full_pg1">
      <h2 className="h2_pg1">Choose your plan</h2>
      <p className="p1_pg1">Hello Anisha,</p>
      <p className="p1_pg1">
        Increase yours and your family's health insurance cover by{" "}
        <strong>$20 lakhs</strong> with Super top-up!
      </p>
      <div className="plan_pg1">
        <div className="head_pg1">Plan details</div>
        <div className="part_pg1">
          <p className="title_pg1">Your plan type</p>
          <select
            placeholder="Select your plan"
            value={user.your_plan}
            onChange={(e) => {
              handleState(e, setUser, "your_plan");
            }}
            className="input_pg1"
          >
            {plans.map((pln, index) => {
              return (
                <>
                  <option key={index}>
                    <p>{pln.title}</p>
                    <div className="plans_pg1">
                      <p className="">{pln.head}</p>
                      <p className="">{pln.price}</p>
                    </div>
                  </option>
                </>
              );
            })}
          </select>
        </div>
      </div>
      <div className="plan_pg1">
        <div className="head_pg1">Basic details</div>
        <div className="infoBox_pg1">
          <div className="sec_pg1">
            <div className="part_pg1">
              <p className="title_pg1">Personal email address</p>
              <input
                type="email"
                placeholder="Enter"
                value={user.email}
                onChange={(e) => {
                  handleState(e, setUser, "email");
                }}
                className="input_pg1"
              />
            </div>
            <div className="part_pg1">
              <p className="title_pg1">Mobile number</p>
              <input
                type="text"
                placeholder="Enter"
                value={user.mobile}
                onChange={(e) => {
                  handleState(e, setUser, "mobile");
                }}
                className="input_pg1"
              />
            </div>
          </div>
          <div className="sec_pg1">
            <div className="part_pg1">
              <p className="title_pg1">Address line 01</p>
              <input
                type="text"
                placeholder="Enter"
                value={user.address1}
                onChange={(e) => {
                  handleState(e, setUser, "address1");
                }}
                className="input_pg1"
              />
            </div>
            <div className="part_pg1">
              <p className="title_pg1">Address line 02</p>
              <input
                type="text"
                placeholder="Enter"
                value={user.address2}
                onChange={(e) => {
                  handleState(e, setUser, "address2");
                }}
                className="input_pg1"
              />
            </div>
          </div>
          <div className="sec_pg1">
            <div className="part_pg1">
              <p className="title_pg1">Pincode</p>
              <input
                type="text"
                placeholder="Enter"
                value={user.pincode}
                onChange={(e) => {
                  handleState(e, setUser, "pincode");
                }}
                className="input_pg1"
              />
            </div>
            <div className="part_pg1">
              <p className="title_pg1">State</p>
              <select
                placeholder="Enter"
                value={user.state}
                onChange={(e) => {
                  handleState(e, setUser, "state");
                }}
                className="input_pg1"
              >
                {options.map((opt, index) => {
                  return (
                    <option value={opt} key={index}>
                      {opt}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
