import  "react";
import useResponsive from "../hooks/useEventListner";

const EventListenerComponent = () => {
    const {getScreenSize} = useResponsive();

    return (
        <div>
            <h1>Event Liseter Component</h1>
            <p>Requiement: Create a event listener component that listens to a button click and displays a message</p>
            <p>Screen Size: {getScreenSize()}</p>
        </div>
    );
}

export default EventListenerComponent;