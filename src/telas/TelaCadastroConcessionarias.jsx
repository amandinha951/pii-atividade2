import Pagina from "../templates/Pagina";
import FormConcessionarias from "./formularios/FormConcesseionarias";

export default function TelaCadastroConcessionarias(props){
    return(
        <Pagina titulo='Tela de Cadastro de Concessionárias' >
            <FormConcessionarias/>
        </Pagina>
    )
}