import Pacientes from "./Pacientes";



const ListadoPacientes = ({pacientes, setPaciente,eliminarPaciente}) => {

  
  
  return (

       

    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mx-5">
       {pacientes && pacientes.length ? (
            <>
              <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
              <p className=" mt-5 mb-10 text-center  text-xl">
                Administra tus{" "}
                <span className="text-indigo-600 font-bold">Pacientes y citas</span>
              </p>

              {pacientes.map((paciente) =>( 

                    <Pacientes
                    key={paciente.id}
                    paciente= {paciente}
                    setPaciente = {setPaciente}
                    eliminarPaciente={eliminarPaciente}
                    
                    />
                
                )
              )
              }</>

       ): (
         <>
           <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
              <p className=" mt-5 mb-10 text-center  text-xl">
                Comienza agregando pacientes{" "}
                <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
              </p>
         
         </>
       ) }
     

     

     
    </div>
  );
};

export default ListadoPacientes;
