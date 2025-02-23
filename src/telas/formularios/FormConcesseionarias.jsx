import {Form, Row, Col, InputGroup, Button} from 'react-bootstrap'
import { useState } from 'react';


export default function FormConcesseionarias(props){
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
                <h3>Formulário de Cadastro de Concessionárias</h3>
            </div>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} className='mt-4'  >
                    <Form.Label>Nome da Concessionária</Form.Label>
                    <Form.Control
                        required
                        id="nome-concessionaria"
                        name="nome-concessionaria"
                        type="text"
                        placeholder="Informe o nome da concessionária"
                        defaultValue=""
                    />
                    <Form.Control.Feedback type="invalid">Informe o nome da concessionária</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className='mt-4' >
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Control
                        required
                        id="cnpj"
                        name="cnpj"
                        type="text"
                        placeholder="00.000.000/0000-00"
                        defaultValue=""
                    />
                <Form.Control.Feedback type="invalid" >Informe um CNPJ válido</Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} className='mt-2'  >
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control
                        required
                        id="telefone"
                        name="telefone"
                        type="text"
                        placeholder="(00) 0000-0000"
                        defaultValue=""
                    />
                    <Form.Control.Feedback type="invalid">Informe um número de telefone</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className='mt-2' >
                    <Form.Label>E-mail de contato</Form.Label>
                    <Form.Control
                        required
                        id="email"
                        name="email"
                        type="email"
                        placeholder="empresa@gmail.com"
                        defaultValue=""
                    />
                <Form.Control.Feedback type="invalid" >Informe um e-mail válido</Form.Control.Feedback>
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