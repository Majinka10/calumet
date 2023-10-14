package Persistence;

import Model.Contacto;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import Utility.ConexionDB;
import java.sql.Connection;

/**
 * Esta clase implementa la interfaz ContactoCRUD y se utiliza para el acceso 
 * a los datos.
 * @author majinka
 */
public class ContactoDAO implements ContactoCRUD{
    PreparedStatement ps;
    Connection con;
    int res;
    String msj;
    Contacto c = new Contacto(); 
    CrudOperations crud = new CrudOperations();

    /**
     * Recupera una lista de contactos de la base de datos.
     * 
     * @return Objeto List con la lista de contactos.
     */
    @Override
    public List<Contacto> listar() {
        List<Contacto> datos = new ArrayList<>(); 
        ConexionDB conex = new ConexionDB();
        String sql = "select * from contactos";
        ResultSet rs = crud.consultarBD(sql, conex.getConnection());

        try{
            while(rs.next()){
                Contacto c = new Contacto();
                c.setId(rs.getInt("id"));
                c.setTypeId(rs.getString("typeId"));
                c.setFirstName(rs.getString("firstName"));
                c.setLastName(rs.getString("lastName"));
                c.setAddress(rs.getString("address"));
                c.setEmail(rs.getString("email"));
                c.setPhone(rs.getString("phone"));
                c.setFavorite(rs.getBoolean("favorite"));
                datos.add(c);
            }
        }catch (Exception e){
            e.printStackTrace();
        } finally {
            conex.cerrarConexion();
        }
        return datos;
    }

    /**
     * Agrega un contacto a la base de datos.
     * 
     * @param id    ID del contacto.
     * @param typeId    Tipo de documentación del contacto.
     * @param firstName Nombres del contacto.
     * @param lastName  Apellidos del contacto.
     * @param address   Dirección del contacto.
     * @param email Correo electrónico del contacto.
     * @param phone Número telefónico del contacto.
     * @param favorite  Si el contacto es favorito o no.
     * @return String que indica el éxito de la operación.
     */
    @Override
    public String add(int id, String typeId, String firstName, String lastName, String address, String email, String phone, boolean favorite) {
        ConexionDB conex = new ConexionDB();
        String sql = "insert into contactos(id, typeId, firstName, lastName, address, email, phone, favorite) values(?,?,?,?,?,?,?,?)";
        try{
            con = conex.getConnection();
            ps=con.prepareStatement(sql);
            ps.setInt(1, id);
            ps.setString(2, typeId);
            ps.setString(3, firstName);
            ps.setString(4, lastName);
            ps.setString(5, address);
            ps.setString(6, email);
            ps.setString(7, phone);
            ps.setBoolean(8, favorite);
            res = ps.executeUpdate();
            if(res == 1){
                msj = "Contacto agregado";
            }else {
                msj = "Error";
            }
        }catch (Exception e){} 
        
        conex.cerrarConexion();
        return msj;
    }

    /**
     * Elimina un contacto de la base de datos.
     * 
     * @param id    ID del contacto.
     * @return Objeto Contacto del contacto eliminado.
     */
    @Override
    public Contacto delete(int id) {
        ConexionDB conex = new ConexionDB();
        String sql= "delete from contactos where id="+id;
        try{
            con = conex.getConnection();
            ps=con.prepareStatement(sql);
            ps.executeUpdate();
        }catch(Exception e){
            e.printStackTrace();
        }
        
        conex.cerrarConexion();
        return c;
    }
}
