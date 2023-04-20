import { useNavigate } from "react-router-dom"
import From from "../components/Form"

const NewCustomer = () => {

  const navigate = useNavigate()

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">New Customer</h1>
      <p className="mt-3">Type alls fields</p>

      <div className="flex justify-end">
        <button
          className="bg-blue-900 hover:bg-blue-700 text-white font-bold px-3 py-1 uppercase"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">

        <form>
          <From/>
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 text-white uppercase hover:bg-blue-700 font-bold text-lg"
            value="Register Customer"
          />
        </form>
      </div>

    </>
  )
}

export default NewCustomer
