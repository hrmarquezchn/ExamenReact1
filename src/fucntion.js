import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

export function alerta (mensaje, icono, id=''){
    onFocus(id);
    const Myswal = withReactContent(Swal); 
    Myswal.fire({
        title: mensaje,
        icon: icono
    })
}
function onFocus(id){
    if (id !==''){
        document.getElementById(id).focus();
    }
}