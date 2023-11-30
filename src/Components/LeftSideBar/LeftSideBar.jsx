import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faArrowRightFromBracket,
  faChartSimple,
  faDollarSign,
  faHouse,
  faLayerGroup,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LeftSideBar = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center ">
          <FontAwesomeIcon icon={faLayerGroup}></FontAwesomeIcon>
          <p className="font-medium ml-3 ">Products</p>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faChartSimple}></FontAwesomeIcon>
          <div className="w-full flex items-center justify-between mr-10">
            <p className="font-medium ml-3">Analytics</p>
            <FontAwesomeIcon icon={faAngleDown} color="black"></FontAwesomeIcon>
          </div>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
          <div className="w-full flex items-center justify-between mr-10">
            <p className="font-medium ml-3">Billing</p>
            <FontAwesomeIcon icon={faAngleDown} color="black"></FontAwesomeIcon>
          </div>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
          <div className="w-full flex items-center justify-between mr-10">
            <p className="font-medium ml-3">Company</p>
            <FontAwesomeIcon icon={faAngleDown} color="black"></FontAwesomeIcon>
          </div>
        </div>

        <div className="flex items-center">
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          <p className="font-medium ml-3">Admin</p>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
          <p className="font-medium ml-3">Logout</p>
        </div>
      </div>
      <div className="absolute bottom-3 flex flex-col justify-center items-center gap-6">
        <div className="w-14 h-14 shadow-sm  shadow-black  flex justify-center items-center rounded-full">
          <div className="w-8 h-8 flex justify-center items-center rounded-full bg-blue-500">
            <FontAwesomeIcon icon={faQuestion} color="white"></FontAwesomeIcon>
          </div>
        </div>
        <h3 className="font-semibold text-xl">Help Center</h3>
        <p className="text-[#667085] text-sm">
          Getting trouble on Simplebook?
          <br /> Reach out and solve your problem
        </p>
        <button className=" text-lg text-white bg-[#1570EF]  btn btn-primary px-20 py-2 border-none">
          Consult Now
        </button>
      </div>
    </div>
  );
};

export default LeftSideBar;
