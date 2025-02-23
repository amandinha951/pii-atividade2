import Pagina from "../templates/Pagina";
import FormFornecedor from "./formularios/FormFornecedor";

export default function TelaCadastroFornecedor(props){
    return(
        <Pagina titulo='Tela de Cadastro de Fornecedores'>
            <FormFornecedor/>
        </Pagina>
    )
}