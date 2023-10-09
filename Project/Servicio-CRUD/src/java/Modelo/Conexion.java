package Modelo;

/**
 *
 * @author majinka
 */
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
//import java.sql.PreparedStatement;
import java.sql.Statement;




public class Conexion {

    Connection conexion;
    ResultSet rs;
//    PreparedStatement pstmt;
    Statement stmt;

    
    public Conexion(){
        try { 
            Class.forName("com.mysql.cj.jdbc.Driver");
            conexion = DriverManager.getConnection("jdbc:mysql://localhost:3306/ejemploDB","root","password");
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println("No se pudo establecer la conexión.");
            e.printStackTrace();
        }
    }
    
    public Connection getConnection(){
        return conexion;
    }
    
    public void closeConnection(Connection con) {
        if (con != null) {
            try {
                con.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
    
    public void cerrarConexion(Connection conexion) {
        if (conexion != null) {
            try {
                conexion.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
    
    // Mtodo que devuelve un ResultSet de una consulta (tratamiento de SELECT)
     public ResultSet consultarBD(String sentencia) {
        try {
            stmt = conexion.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
            rs = stmt.executeQuery(sentencia);
        } catch (SQLException sqlex) {
        } catch (RuntimeException rex) {
        } catch (Exception ex) {
        }

        return rs;
    }
    
      public void cerrarConexion() {
        closeConnection(conexion);
    }
}
