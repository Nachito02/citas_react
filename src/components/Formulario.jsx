import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPaciente, setPacientes, paciente}) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);
 

    useEffect(() => {

          if(Object.keys(paciente).length > 0) {
           setNombre(paciente.nombre);
           setPropietario(paciente.propietario);
           setEmail(paciente.email);
           setFecha(paciente.fecha);
           setSintomas(paciente.sintomas);

          } 

    }, [paciente])


   

  
  const generarId = () => {
      const random = Math.random().toString(36).substr(2);
      const fecha = Date.now().toString(36);

      return random + fecha;
  }

  const handleSubmit = (e) => {
    /* validacion de formulario */
    e.preventDefault();

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    } 

    setError(false);

    // objeto de pacientes

    const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
    }

      if(paciente.id) {
        //editando el registro

          objetoPaciente.id = paciente.id;

          const pacienteActualizado = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

          setPacientes(pacienteActualizado);
          setPaciente({});

      }else {
          //nuevo registro
          objetoPaciente.id = generarId();
          setPacientes([...pacientes, objetoPaciente]);

      }

      //reinicar el formulario

      setNombre('');
      setPropietario('');
      setEmail('');
      setFecha('');
      setSintomas('');
      
        
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5"
        action=""
      >
        {error && <Error>Todos los campos son obligatorios</Error> }
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre mascota
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            name=""
            id="mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre propietario
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del propietario"
            name=""
            id="propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Email contacto Propietario"
            name=""
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta"
          >
            Alta
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            name=""
            id="alta"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Alta
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name=""
            id="sintomas"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all mb-10"
          type="submit"
          name=""
          value={paciente.id ? "Editar paciente" : "Agregar paciente"}
          id=""
        />
      </form>
    </div>
  );
};

export default Formulario;
