package Persistence;

import Model.Contacto;
import java.util.List;

/**
 * Esta interfaz tiene el conjunto de métodos abstractos de la entidad contacto.
 * @author majinka
 */
public interface ContactoCRUD {
    public List listar();
    public String add(int id, String typeId,String firstName,String lastName,String address,String email,String phone,boolean favorite);
    public Contacto delete(int id);
}
