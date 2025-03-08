import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function createConnection(serverUrl, roomId) {
    return {
      connect() {
        //console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
        toast.success(`Connected to "${roomId}" room!`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        
      },
      disconnect() {
        //console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
        toast.error(`Disconnected from "${roomId}"!`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
      }
    };
  }
  