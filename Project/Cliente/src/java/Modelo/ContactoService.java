package Modelo;

import webservice.Contacto;

/**
 *
 * @author majinka
 */
public class ContactoService {

    public ContactoService() {
    }

    public java.util.List<webservice.Contacto> listar() {
        webservice.Servicios_Service service = new webservice.Servicios_Service();
        webservice.Servicios port = service.getServiciosPort();
        return port.listar();
    }

    public String agregar(int id, java.lang.String typeId, java.lang.String firstName, java.lang.String lastName, java.lang.String address, java.lang.String email, java.lang.String phone, boolean favorite) {
        webservice.Servicios_Service service = new webservice.Servicios_Service();
        webservice.Servicios port = service.getServiciosPort();
        return port.agregar(id, typeId, firstName, lastName, address, email, phone, favorite);
    }

    public Contacto eliminar(int id) {
        webservice.Servicios_Service service = new webservice.Servicios_Service();
        webservice.Servicios port = service.getServiciosPort();
        return port.eliminar(id);
    }
    
}
