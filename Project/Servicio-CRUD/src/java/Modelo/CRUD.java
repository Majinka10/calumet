package Modelo;

import java.util.List;

/**
 *
 * @author majinka
 */
public interface CRUD {
    public List listar();
    public Contacto ListarID(int id);
    public String add(int id, String typeId,String firstName,String lastName,String address,String email,String phone,boolean favorite);
    public Contacto delete(int id);
}
