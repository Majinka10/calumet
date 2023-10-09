package Modelo;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author majinka
 */
public class ContactoDAO implements CRUD{
    PreparedStatement ps;
    ResultSet rs;
    Connection con;
    int res;
    String msj;
    Contacto c = new Contacto(); 



    @Override
    public List<Contacto> listar() {
        List<Contacto> datos = new ArrayList<>(); 
        Conexion conex = new Conexion();
        String sql = "select * from contactos";
        ResultSet rs = conex.consultarBD(sql);

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

    @Override
    public Contacto ListarID(int id) {
        Conexion conex = new Conexion();
        String sql = "select * from contactos where ide="+id;
        try{
            con = conex.getConnection();
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while(rs.next()){
                c.setId(rs.getInt("id"));
                c.setTypeId(rs.getString("typeId"));
                c.setFirstName(rs.getString("firstName"));
                c.setLastName(rs.getString("lastName"));
                c.setAddress(rs.getString("address"));
                c.setEmail(rs.getString("email"));
                c.setPhone(rs.getString("phone"));
                c.setFavorite(rs.getBoolean("favorite"));
        }
        } catch (Exception e){
            e.printStackTrace();
        } finally {
            conex.cerrarConexion();
        }
        
        return c;
    }

    @Override
    public String add(int id, String typeId, String firstName, String lastName, String address, String email, String phone, boolean favorite) {
        Conexion conex = new Conexion();
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

    @Override
    public Contacto delete(int id) {
        Conexion conex = new Conexion();
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
