import Pagina from "../templates/Pagina";
import FormCadastroVeiculos from "./formularios/FormCadastroVeiculos";

export default function TelaCadastroVeiculo(props){
    return(
        <Pagina titulo='Tela de Cadastro de Veículos' >
            <FormCadastroVeiculos/>
        </Pagina>
    )
}