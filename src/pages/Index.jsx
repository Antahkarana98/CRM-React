import { useLoaderData } from 'react-router-dom'
import Customer from '../components/Customer'

export function loader() {

  const customers = [
    {
        id: 1,
        nombre: 'Juan',
        telefono: 102013313,
        email: "juan@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 2,
        nombre: 'Karen',
        telefono: 138198313,
        email: "karen@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 3,
        nombre: 'Josue',
        telefono: 31983913,
        email: "josue@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 4,
        nombre: 'Miguel',
        telefono: 319381983,
        email: "miguel@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 5,
        nombre: 'Pedro',
        telefono: 1398198938,
        email: "pedro@juan.com",
        empresa: 'Codigo Con Juan'
    },
  ];

  return customers;
}


const Index = () => {

  const customers = useLoaderData()



  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Customer</h1>
      <p className="mt-3">Manage your customers</p>

      {customers.length ? (
        <table className="w-full mt-5 shadow table-auto">
          <thead className='bg-blue-800 text-white'>
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {customers.map(customer => (
              <Customer
                key={customer.id}
                customer={customer}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No customers yet</p>
      )}
    </>
  )
}

export default Index
