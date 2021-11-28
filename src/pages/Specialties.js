import { useHistory } from "react-router";
import Navbar from "../components/Navbar";
import { Main } from "../styles/genericStyledComponents";
import { IoIosArrowUp } from "react-icons/io";
import { doctors } from "../mockData/mockData";
import {
    SearchBox,
    Order,
    IconSearch,
    IconFilter,
} from "../styles/stylesSpecialties";
import CardDoctorPost from "../components/CardDoctorPost";

function Specialties() {
    const history = useHistory();

    if (!localStorage.getItem("MetamorfoseTrans")) {
        history.push('/');
    }

    return(
        <Main>
            <Navbar />
            <SearchBox type="text" placeholder="pesquisar por especialidade"/>
            <IconSearch />
            <IconFilter />
            <Order>Odernar por: proximidade <span><IoIosArrowUp /></span></Order>
            { doctors.map((doctor) => (
               <CardDoctorPost doctor={doctor} key={doctor.id} />
            ))}
        </Main>

    );
}

export default Specialties;