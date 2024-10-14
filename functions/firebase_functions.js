import { db } from "../firebase.js";
import {
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

// Función para contar los pasajeros inscritos
async function updatePassengerCount() {
  try {
    const querySnapshot = await getDocs(collection(db, "passengers"));
    const passengerCount = querySnapshot.size; // El tamaño del snapshot es el número de documentos
    document.getElementById("passenger-count").innerText = passengerCount;
  } catch (error) {
    console.error("Error al obtener el número de pasajeros: ", error);
  }
}

// Llamar a la función para actualizar el contador al cargar la página
window.onload = () => {
  updatePassengerCount();
};

// La función save_data que ya tienes
async function save_data() {
  console.log("Ejecutando función");

  let first_name = document.getElementById("first-name").value;
  let last_name = document.getElementById("last-name").value;
  let flight = document.getElementById("flight").value;
  let email = document.getElementById("email").value;

  if (!first_name || !last_name || !flight || !email) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Llene todos los campos por favor",
    });
    return;
  }

  try {
    // Guardar los datos en Firestore
    const docRef = await addDoc(collection(db, "passengers"), {
      first_name: first_name,
      last_name: last_name,
      flight: flight,
      email: email,
      timestamp: new Date(),
    });

    Swal.fire({
      title: "Buen trabajo!",
      text: `El vuelo ha sido reservado. ID de reserva: ${docRef.id}`,
      icon: "success",
    });

    // Actualizar el contador de pasajeros después de guardar los datos
    updatePassengerCount();
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Error al guardar los datos: ${error}`,
    });
    console.error("Error al guardar en Firebase: ", error);
  }
}

window.save_data = save_data;
