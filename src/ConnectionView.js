import { useState, useEffect } from 'react';

const ConnectionView = () => {
    const [deviceInfo, setDeviceInfo] = useState(null);
    useEffect(() => {
        if (localStorage.getItem("connection") != null) {
            //   alert("connection exists");
            //   device = localStorage.getItem("connection");
            //   connectToDeviceAndSubscribeToUpdates();
            //   setIsDisconnected(false);
            setDeviceInfo(localStorage.getItem("connection"));
        }
    }, []);

    return ( 
        <div>
            Connection View 
            <br></br>
            {deviceInfo}
        </div>
     );
}
 
export default ConnectionView;