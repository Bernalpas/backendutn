
import Form from 'react-bootstrap/Form';
import Imagen from '../componentes/Imagen';

function Formulario() {








    return (
        <>
            <h1 className="container mt-5 text-center">
                Formulario de Registro
            </h1>
            <div className="container mt-5 d-flex">
                <Form className='w-75'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre: </Form.Label>
                        <Form.Control type="text" placeholder="Pepe" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Apellido: </Form.Label>
                        <Form.Control type="text" placeholder="Pérez" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>DNI: </Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>
                </Form>

                <Imagen />
            </div>
        </>
    );
}

export default Formulario;