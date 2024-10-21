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

// La función save_data 
async function save_data() {
  let first_name = document.getElementById("first-name").value;
  let last_name = document.getElementById("last-name").value;
  let profession = document.getElementById("profession").value;
  let age = document.getElementById("age").value;
  let address = document.getElementById("address").value;
  let flight = document.getElementById("flight").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  if (!first_name || !last_name || !profession || !age || !address || !flight || !email || !phone) {
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
      profession: profession,
      age: age,
      address: address,
      flight: flight,
      email: email,
      phone: phone,
      timestamp: new Date(),
    });

    Swal.fire({
      title: "Buen trabajo!",
      html: `El vuelo ha sido reservado. Pasajero: <b>${first_name}</b> <b>${last_name}</b>`,
      icon: "success",
      footer: `ID de reserva: ${docRef.id}`
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
