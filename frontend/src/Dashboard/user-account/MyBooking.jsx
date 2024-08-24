import useFetchData from "../../hooks/useFetchData"
import { BASE_URL } from "../../config"
import DoctorCard from '../../components/doctors/DoctorCard'
import MyError from "../../components/error/MyError"
import HashLoader from "react-spinners/HashLoader"

function MyBooking() {

    const { data: oppointment, loading, error } = useFetchData(`${BASE_URL}/api/users/appointments/my-appointments`)

    // console.log('first', oppointment)

    return (
        <div>

            {loading && !error && <div className=' flex justify-center items-center mt-20'><HashLoader color='#0067FF' /></div>}

            {error && !loading && <MyError errMsg={error} />}

            {!loading && !error && (
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                        oppointment.map(doctor => (
                            <DoctorCard doctor={doctor} key={doctor._id} />
                        ))
                    }
                </div>)
            }

            {
                !loading && !error && oppointment.length === 0 && (
                    <h2
                        className=" mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor"
                    >You did not book any doctor yet!
                    </h2>
                )
            }
        </div>
    )
}

export default MyBooking