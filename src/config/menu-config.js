import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import WorkIcon from '@mui/icons-material/Work';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ContactsIcon from '@mui/icons-material/Contacts';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const MENU_CONFIG =[
    {
        path:"/",
        name:"Dashboard",
        icon:<AssignmentTurnedInIcon/>
    },
    {
        path:"/cases",
        name:"Cases",
        icon:<WorkIcon/>
    },
    {
        path:"/reciepts",
        name:"Reciepts",
        icon:<ReceiptIcon/>
    },
    {
        path:"/contracts",
        name:"Contracts",
        icon:<ContactsIcon/>
    },
    {
        path:"/emergency",
        name:"Emergency",
        icon:<LocalHospitalIcon/>
    },
]