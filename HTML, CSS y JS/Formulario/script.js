//La funcion en general para hacer las validaciones personalizadas está basada en: https://getbootstrap.com/docs/5.3/forms/validation/#how-it-works
(() => {
  'use strict';

  // Función para agregar un contacto a la tabla
  function addContactToTable(id, typeId, name, lastName, email, address, phoneNumber, favorite) {
    const contactList = document.getElementById('contactList');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td class="d-none d-md-table-cell">${id}</td>
      <td class="d-none d-md-table-cell">${typeId}</td>
      <td>${name}</td>
      <td class="d-none d-md-table-cell">${lastName}</td>
      <td class="d-none d-md-table-cell">${email}</td>
      <td class="d-none d-md-table-cell">${address}</td>
      <td>${phoneNumber}</td>
      <td class="d-none d-md-table-cell">${favorite ? 'Yes' : 'No'}</td>
      <td>
        <button class="btn btn-primary move-up">↑</button>
        <button class="btn btn-primary move-down">↓</button>
      </td>
      <td><button class="btn btn-danger delete-button">Delete</button></td>
    `;

    // Agregar evento de clic al botón "Delete" para eliminar la fila
    const deleteButton = newRow.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
      newRow.remove(); // Eliminar la fila

       // Eliminar el ID de la lista de IDs existentes
       const idToRemove = newRow.querySelector('td:first-child').textContent;
       const index = existingIds.indexOf(idToRemove);
       if (index !== -1) {
         existingIds.splice(index, 1);
       }
       
       
    });

    // Agregar evento de clic al botón "Move Up" para mover hacia arriba
    const moveUpButton = newRow.querySelector('.move-up');
    moveUpButton.addEventListener('click', () => {
      const currentRow = newRow;
      const previousRow = currentRow.previousElementSibling;
      if (previousRow) {
        contactList.insertBefore(currentRow, previousRow);
      }
    });

    // Agregar evento de clic al botón "Move Down" para mover hacia abajo
    const moveDownButton = newRow.querySelector('.move-down');
    moveDownButton.addEventListener('click', () => {
      const currentRow = newRow;
      const nextRow = currentRow.nextElementSibling;
      if (nextRow) {
        contactList.insertBefore(nextRow, currentRow);
      }
    });

    contactList.appendChild(newRow);
  }

  // Obtengo el formulario para aplicar estilos de validación Bootstrap personalizados
  const form = document.getElementById('myForm');

   // Array para mantener un registro de los IDs existentes
   const existingIds = [];

  // Agrego un evento al formulario para su envío para que evite hacer la validación por defecto
  form.addEventListener('submit', event => {
    form.classList.add('was-validated');
    event.preventDefault();

    if (form.checkValidity()) {
      const id = document.getElementById('validationCustom05').value;
      const typeId = document.getElementById('validationCustom04').value;
      const name = document.getElementById('validationCustom01').value;
      const lastName = document.getElementById('validationCustom02').value;
      const email = document.getElementById('inputEmail4').value;
      const address = document.getElementById('inputAddress').value;
      const phoneNumber = document.getElementById('validationCustom05').value;
      const favorite = document.getElementById('invalidCheck').checked;

      // Verificar si el ID ya existe en el registro
      if (existingIds.includes(id)) {
        alert('El ID ya existe. Debe ser único.');
        return;
      }

      // Agregar el ID a la lista de IDs existentes
      existingIds.push(id);

      // Agregar contacto a la tabla
      addContactToTable(id, typeId, name, lastName, email, address, phoneNumber, favorite);

      // Resetear el formulario y las clases de validación
      form.reset();
      form.classList.remove('was-validated');
    } else {
      event.stopPropagation();
      // form.classList.add('was-validated');
    }
  }, false);
})();