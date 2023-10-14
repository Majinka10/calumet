package Utility;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Esta clase me permite establecer una conexión con la base de datos de la 
 * aplicación.
 * 
 * @author majinka
 */
public class ConexionDB {
    private final String DRIVER = "com.mysql.cj.jdbc.Driver";
    private final String PROTOCOL = "jdbc:mysql://";
    
    private String USER = "root"; //Nombre del usuario con el que se quiere 
    //autenticar.
    private String PASSWORD = "password"; //Contraseña del usuario.
    private String database = "ejemploDB"; //Nombre de la base de datos.
    private String hostname = "localhost:3306"; //Dominio en el cual está 
    //respondiendo el gestor de base de datos.
    private String url;
    
    Connection conexion;

   /**
   * Crea la conexión a base de datos. Si el proceso tiene éxito la conexión 
   * se podrá empezar a utilizar para hacer operaciones.
   */
    public ConexionDB(){
        url = PROTOCOL + hostname + "/" + database + "?serverTimezone=UTC";
        try { 
            Class.forName(DRIVER);
            conexion = DriverManager.getConnection(url,USER,PASSWORD);
            System.out.println("Connected");
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println("No se pudo establecer la conexión.");
            e.printStackTrace();
        }
    }
    
   /**
   * Retorna la conexión que nos permite interactuar con la base de datos.
   *
   * @return Objeto de la conexión exitosa. Si hubo algún falló retornará nulo.
   */
    public Connection getConnection(){
        return conexion;
    }
    
    /**
    * Cierra la conexion a la base de datos.
    * 
    *@param con Conexion que se quiere cerrar
    */
    public void closeConnection(Connection con) {
        if (con != null) {
            try {
                con.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
    
    /**
    * Cierra la conexión establecida con base de datos.
    */
    public void cerrarConexion() {
        closeConnection(conexion);
        System.out.println("Se cerró conexión.");
    }
}

