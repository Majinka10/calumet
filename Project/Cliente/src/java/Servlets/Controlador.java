package Servlets;

import Persistence.ContactoDAO;
import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import Model.Contacto;

/**
 * Servlet que maneja las peticiones HTTP GET y POST para procesar acciones del
 * cliente. Utiliza objetos 'ContactoDAO' y genera respuestas 
 * JSON correspondientes.
 * @author majinka
 */
public class Controlador extends HttpServlet {
        
    List<String> tareas = Arrays.asList(new String[]{
    "Listar",
    "Agregar",
    "Eliminar"});

    ContactoDAO contacto = new ContactoDAO();
    
    /**
     * Maneja solicitudes HTTP y procesa las acciones utilizando los parametros
     * de la solicitud.
     * 
     * @param request Solicitud HTPP entrante del cliente.
     * @param response Respuesta HTPP que se envia al cliente.
     * @throws ServletException Excepción en caso de un error relacionado con
     * el servlet.
     * @throws IOException Excepción en caso de un error relacionado con la
     * entrada/salida.
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String proceso = request.getParameter("proceso");
        String jsonResponse = ""; // Almacenar la respuesta JSON

        if(tareas.contains(proceso)){
            
            if(proceso.equals("Agregar")){
                String id = request.getParameter("id");
                String typeId = request.getParameter("typeId");
                String firstName = request.getParameter("firstName");
                String lastName = request.getParameter("lastName");
                String address = request.getParameter("address");
                String email = request.getParameter("email");
                String phone = request.getParameter("phone");
                String favorite = request.getParameter("favorite");
                
                contacto.add(Integer.parseInt(id), typeId, firstName, lastName, address, email, phone, Boolean.parseBoolean(favorite));
                                
                jsonResponse = "{\"ok\": true, \"proceso\": \"Agregar\", \"message\": \"El contacto fue agregado\"}";

            } else if (proceso.equals("Listar")){
                try{
                    List<Contacto> datos = contacto.listar();
                    jsonResponse = "{\"ok\": true, \"proceso\": \"Listar\", \"Contactos\":" + new Gson().toJson(datos) + "}";
                }catch (Exception e){
                    jsonResponse = "{\"ok\": false, \"proceso\": \"" + proceso + "\", \"error\": \"Error al procesar la solicitud\"}";
                    e.printStackTrace();
                }
            } else if (proceso.equals("Eliminar")){
                String id = request.getParameter("id");
                
                contacto.delete(Integer.parseInt(id));
                
                jsonResponse = "{\"ok\": true, \"proceso\": \"Eliminar\", \"message\": \"El contacto fue eliminado\"}";
            }
        } else{
            jsonResponse = "{\"ok\": false, \"proceso\": \"INVALID\", \"error\": \"Petición inválida\"}";       
        }
        
    response.setContentType("application/json;charset=UTF-8");
    PrintWriter out = response.getWriter(); 
    out.print(jsonResponse);
    out.close();

    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
