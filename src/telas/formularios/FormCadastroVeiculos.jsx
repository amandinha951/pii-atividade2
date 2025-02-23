import {Form, Row, Col, InputGroup, Button} from 'react-bootstrap'
import { useState } from 'react';


export default function FormCadastroVeiculos(props){
        const [validated, setValidated] = useState(false);

        const handleSubmit = (event) => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            }

            setValidated(true);
        };

    return(
        <>
            <div className=" text-center">
                <h3>Formulário de Cadastro de Veículos</h3>
            </div>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} className='mt-4'  >
                    <Form.Label>Placa do Veículo</Form.Label>
                    <Form.Control
                        required
                        id="placa"
                        name="placa"
                        type="text"
                        placeholder="Ex: ABC1D23"
                        defaultValue=""
                    />
                    <Form.Control.Feedback type="invalid">Informe a placa do veículo</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className='mt-4' >
                    <Form.Label>Modelo do veículo</Form.Label>
                    <Form.Control
                        required
                        id="modelo"
                        name="modelo"
                        type="text"
                        placeholder="Modelo do veículo"
                        defaultValue=""
                    />
                <Form.Control.Feedback type="invalid" >Informe o modelo do veículo</Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} className='mt-2'  >
                    <Form.Label>Marca do veículo</Form.Label>
                    <Form.Control
                        required
                        id="marca"
                        name="marca"
                        type="text"
                        placeholder="Marca do veículo"
                        defaultValue=""
                    />
                    <Form.Control.Feedback type="invalid">Informe a marca do veículo</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className='mt-2' >
                    <Form.Label>Ano de Fabricação</Form.Label>
                    <Form.Control
                        required
                        id="ano"
                        name="ano"
                        type="text"
                        placeholder="Ex: 2002"
                        defaultValue=""
                    />
                <Form.Control.Feedback type="invalid" >Informe o ano de fabricação</Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} className='mt-2'  >
                    <Form.Label>Cor do veículo</Form.Label>
                    <Form.Control
                        required
                        id="cor"
                        name="cor"
                        type="text"
                        placeholder="Cor do veículo"
                        defaultValue=""
                    />
                    <Form.Control.Feedback type="invalid">Informe a cor do veículo</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className='mt-2' >
                    <Form.Label>Chassi do veículo</Form.Label>
                    <Form.Control
                        required
                        id="chassi"
                        name="chassi"
                        type="text"
                        placeholder="Ex: 1ABC23DE45678912"
                        defaultValue=""
                    />
                <Form.Control.Feedback type="invalid" >Informe o Chassi do veículo</Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3">
            <Form.Group as={Col} className='mt-2' >
                    <Form.Label>Renavam do veículo</Form.Label>
                    <Form.Control
                        required
                        id="renavam"
                        name="renavam"
                        type="text"
                        placeholder="Ex: 12345678912"
                        defaultValue=""
                    />
                <Form.Control.Feedback type="invalid" >Informe o Renavam do veículo</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className='mt-2' >
                <Form.Label>Tipo de combustível</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option selected>Selecione o tipo de combustível</option>
                        <option value="1">Gasolina</option>
                        <option value="2">Diesel</option>
                        <option value="3">Etanol</option>
                        <option value="4">Gás Natural</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <div className="d-grid gap-2 col-4 mx-auto mt-4">
                <Button variant="primary" size="lg" type='submit'>
                Cadastrar
                </Button>
                <Button variant="secondary" size="lg" type='reset'>
                Limpar
                </Button>
            </div>
            </Form>
        </>
    )
}