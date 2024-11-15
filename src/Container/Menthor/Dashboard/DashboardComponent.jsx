import image1 from "../../../assets/images/menthor/course1.png";
import image2 from "../../../assets/images/menthor/course2.png";
import { LinearProgress } from "@mui/material";
import MenthorTable from "./MenthorTable";
import { LastReportsBody, LastReportsHead } from "./DashboardData";
const DashboardComponent = () => {
  return (
    <>
      <div className="w-full h-fit  flex lg:flex-row lg:justify-between flex-col gap-y-4  mb-[50px] ">
        <div className="w-fit mx-auto">
          <img
            src={image1}
            className="xl:w-[430px] max-xl:w-[360px] 2xl:w-[504px] max-lg:w-[400px] max-sm:w-[320px] "
          />
          <div className="w-full mt-[12px]">
            <span className="text-[11px] text-[#001EBC] mr-[39%]">45 روز</span>
            <LinearProgress
              sx={{
                width: "100%",
                height: "8px",
                backgroundColor: "#E0E0E0",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#001EBC",
                },
                direction: "rtl",
              }}
              value={45}
              variant="determinate"
            />
            <div className="w-full flex mt-2 justify-between text-[12px] text-black">
              <span>شروع دوره</span>
              <span>پایان دوره</span>
            </div>
          </div>
        </div>
        <div className="w-fit mx-auto">
          <img
            src={image2}
            className="xl:w-[430px] 2xl:w-[504px] max-xl:w-[360px] max-lg:w-[400px] max-sm:w-[320px] "
          />
          <div className="w-full mt-[12px]">
            <span className="text-[11px] text-[#001EBC] mr-[39%]">45 روز</span>
            <LinearProgress
              sx={{
                width: "100%",
                height: "8px",
                backgroundColor: "#E0E0E0",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#001EBC",
                },
                direction: "rtl",
              }}
              value={45}
              variant="determinate"
            />
            <div className="w-full flex mt-2 justify-between text-[12px] text-black">
              <span>شروع دوره</span>
              <span>پایان دوره</span>
            </div>
          </div>
        </div>
      </div>
      <h3 className="mb-4 text-[20px] text-black font-medium">
        آخرین گزارش کارها
      </h3>
      <MenthorTable body={LastReportsBody} head={LastReportsHead} />
    </>
  );
};
export default DashboardComponent;
