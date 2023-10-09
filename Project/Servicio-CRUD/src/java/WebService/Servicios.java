package WebService;

import Modelo.Contacto;
import Modelo.ContactoDAO;
import java.util.List;
import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;


/**
 *
 * @author majinka
 */
@WebService(serviceName = "Servicios")
public class Servicios {
    
    ContactoDAO dao = new ContactoDAO();
    
    @WebMethod(operationName = "listar")
    public List<Contacto> listar() {
        List datos = dao.listar();
        return datos;
    }
    
    @WebMethod(operationName = "agregar")
    public String agregar(@WebParam(name = "id") int id, @WebParam(name = "typeId") String typeId, @WebParam(name = "firstName") String firstName, @WebParam(name = "lastName") String lastName, @WebParam(name = "address") String address, @WebParam(name = "email") String email, @WebParam(name = "phone") String phone, @WebParam(name = "favorite") boolean favorite) {
        String datos = dao.add(id, typeId, firstName, lastName, address, email, phone, favorite);
        return datos;
    }
    
    @WebMethod(operationName = "eliminar")
    public Contacto Eliminar(@WebParam(name = "id") int id){
        Contacto c = dao.delete(id);
        return c;
    }
}