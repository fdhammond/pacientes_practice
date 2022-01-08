import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ pacientes, setPacientes }) => {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false);



    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);
        return fecha + random;
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if ([nombre, propietario, email, date, sintomas].includes('')) {
            setError(true)
            return;
        }

        setError(false)

        const objetoPaciente = {
            nombre,
            propietario,
            email,
            date,
            sintomas
        }

        setPacientes([
            ...pacientes,
            objetoPaciente
        ])
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

            <p className='text-lg mt-5 text-center mb-10'>
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5'
            >
                { error && <Error mensaje='Todos los campos son obligatorios' /> }
                <div className='mb-5'>
                    <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder='Nombre de la Mascota'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value) }
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder='Nombre del Propietario'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder='Email Contacto Propietario'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={email}
                        onChange={(e) => setEmail(e.target.value) }
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        placeholder='Email Contacto Propietario'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={date}
                        onChange={(e) => setDate(e.target.value) }
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>
                        Sintomas
                    </label>
                    <textarea
                        id="sintomas"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        placeholder='Describe los Síntomas'
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value) }
                    />
                </div>
                <input
                    type="submit"
                    className='bg-indigo-600 w-full p-3 text-white uppercase font-bold
                  hover:bg-indigo-700 cursor-pointer transition-all'
                    value="Agregar Paciente"
                />
            </form>
        </div>

    );
};

export default Form;