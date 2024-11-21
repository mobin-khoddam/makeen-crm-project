import Sidebar from "../Sidebar/Sidebar.jsx";
import Header from "../Header/Header.jsx";
import { ThemeProvider, createTheme } from "@mui/material";
const OriginalTemplatePage = ({ children }) => {
  const theme = createTheme({
    direction: "rtl",
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="bg-primary-gray min-h-screen p-8 flex gap-12 max-md:gap-0 max-sm:p-6">
        <Sidebar />
        <div className="flex flex-col w-full h-fit overflow-x-auto overflow-y-hidden">
          <Header />
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default OriginalTemplatePage;
