
import chair from "../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from "date-fns";

const AppointmentBanner = ({date,setDate}) => {
   /*  const [date, setDate]= useState(new Date())
    let footer = <p>Please pick a day.</p>;
  if (date) {
    footer = <p>You picked {format(date, 'PP')}.</p>;
  } */
  return (
    <div>
      
        <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse flex-space">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl"/>
        <DayPicker
         mode="single"
         selected={date}
         onSelect={setDate}
         /* footer={footer} */
         />;
      </div>
    </div>
 {/*    <h3> Available Appointment on {format(date, 'PP')} </h3> */}
    
    </div>
  );
};

export default AppointmentBanner;
