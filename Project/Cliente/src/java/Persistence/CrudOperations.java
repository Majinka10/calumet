package Persistence;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * Clase que permite realizar operaciones CRUD en base de datos.
 * @author majinka
 */
public class CrudOperations {
    ResultSet rs; 
    Statement stmt;
    
    /**
    * Ejecuta una consulta SQL y devuelve un objeto ResultSet para su procesamiento.
    * 
    * @param sentencia Una consulta SQL válida (SELECT, INSERT, DELETE, etc.).
    * @param conexion La conexión de base de datos a utilizar para la consulta.
    * @return Si la consulta se ejecuta con éxito: Objeto ResultSet con 
    * los resultados.
    * Si ocurren errores durante la consulta o la conexión es nula: null
    */
    public ResultSet consultarBD(String sentencia, Connection conexion) {
        try {
            stmt = conexion.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
            rs = stmt.executeQuery(sentencia);
        } catch (SQLException sqlex) {
            sqlex.printStackTrace();
        } catch (RuntimeException rex) {
            rex.printStackTrace();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return rs;
    }
}
