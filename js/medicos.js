const doctorsData = [
    { 
        nombre: 'Dr. Luis González',
        especialidad: 'Cardiología',
        ubicacion: 'Cartago centro',
        horariosconsulta: 'Lunes a Viernes, 8:00 am - 5:00 pm',
        telefono: '+506 2222-3333',
        correo: 'luis.gonzalez@arboldeseda.com',
        resenas: 'Excelente atención, altamente recomendado.',
        informacionadicional: 'El Dr. González tiene más de 10 años de experiencia en el campo de la cardiología.'
      },
      { 
        nombre: 'Dra. Ana Jiménez',
        especialidad: 'Pediatría',
        ubicacion: 'Turrialba, Cartago',
        horariosconsulta: 'Martes y Jueves, 9:00 am - 3:00 pm',
        telefono: '+506 4444-5555',
        correo: 'ana.jimenez@arboldeseda.com',
        resenas: 'Muy amable con los niños, excelente pediatra.',
        informacionadicional: 'La Dra. Jiménez se especializa en el cuidado de niños desde recién nacidos hasta adolescentes.'
      },
      { 
        nombre: 'Dr. José Ramírez',
        especialidad: 'Fisiatría',
        ubicacion: 'Paraiso, Cartago',
        horariosconsulta: 'Lunes, Miércoles y Viernes, 10:00 am - 6:00 pm',
        telefono: '+506 6666-7777',
        correo: 'jose.ramirez@arboldeseda.com',
        resenas: 'Muy profesional y amable, excelente tratamiento para mi lesión.',
        informacionadicional: 'El Dr. Pérez se especializa en rehabilitación física y medicina deportiva.'

      },
      { 
        nombre: 'Dra. María Fernández',
        especialidad: 'Ginecología',
        ubicacion: 'Guapiles, Limón',
        horariosconsulta: 'Martes y Jueves, 8:00 am - 4:00 pm',
        telefono: '+506 8888-9999',
        correo: 'maria.fernandez@arboldeseda.com',
        resenas: 'Muy profesional y empática con las pacientes.',
        informacionadicional: 'La Dra. Fernández tiene experiencia en el cuidado de mujeres embarazadas y en el tratamiento de enfermedades ginecológicas.'
      },
      { 
        nombre: 'Dr. Carlos Sánchez',
        especialidad: 'Oftalmología',
        ubicacion: 'San Jose centro',
        horariosconsulta: 'Lunes a Viernes, 9:00 am - 7:00 pm',
        telefono: '+506 7777-8888',
        correo: 'carlos.sanchez@arboldeseda.com',
        resenas: 'Excelente doctor, resolvió mi problema de visión.',
        informacionadicional: 'El Dr. Sánchez es experto en el diagnóstico y tratamiento de enfermedades oculares.'
      },
      { 
        nombre: 'Dra. Laura Chaves',
        especialidad: 'Dermatología',
        ubicacion: 'Tres Ríos, Cartago',
        horariosconsulta: 'Lunes, Miércoles y Viernes, 10:00 am - 5:00 pm',
        telefono: '+506 9999-0000',
        correo: 'laura.chaves@arboldeseda.com',
        resenas: 'Muy profesional, me ayudó a mejorar mi piel.',
        informacionadicional: 'La Dra. Chaves tiene experiencia en el tratamiento de enfermedades de la piel y procedimientos cosméticos.'
      },
      { 
        nombre: 'Dr. Pedro Mora',
        especialidad: 'Gastroenterología',
        ubicacion: 'Cervantes, Cartago',
        horariosconsulta: 'Martes y Jueves, 10:00 am - 6:00 pm',
        telefono: '+506 3333-4444',
        correo: 'pedro.mora@arboldeseda.com',
        resenas: 'Excelente médico, me ayudó a resolver mi problema digestivo.',
        informacionadicional: 'La Dra. Rodríguez se especializa en el diagnóstico y tratamiento de trastornos del aparato digestivo.'
      },
      { 
        nombre: 'Dra. Sofia Ramirez',
        especialidad: 'Pediatría',
        ubicacion: 'Cartago centro',
        horariosconsulta: 'Lunes a Viernes, 9:00 am - 6:00 pm',
        telefono: '+506 1234-5678',
        correo: 'sofia.ramirez@arboldeseda.com',
        resenas: 'Muy dedicada con los niños, excelente trato.',
        informacionadicional: 'La Dra. Ramirez es conocida por su calidez y cuidado en el tratamiento de niños y adolescentes.'
      },
      { 
        nombre: 'Dr. Alejandro Fernandez',
        especialidad: 'Medicina general',
        ubicacion: 'Paraiso, Cartago',
        horariosconsulta: 'Lunes a Jueves, 10:00 am - 7:00 pm',
        telefono: '+506 9876-5432',
        correo: 'alejandro.fernandez@arboldeseda.com',
        resenas: 'Muy atento y profesional, excelente para resolver problemas de salud comunes.',
        informacionadicional: 'El Dr. Fernandez tiene experiencia en el diagnóstico y tratamiento de una amplia variedad de enfermedades y condiciones médicas.'
      },
      { 
        nombre: 'Dra. Valeria Guzman',
        especialidad: 'Ginecología',
        ubicacion: 'Tres Ríos, Cartago',
        horariosconsulta: 'Martes, Jueves y Viernes, 9:00 am - 5:00 pm',
        telefono: '+506 2468-1357',
        correo: 'valeria.guzman@arboldeseda.com',
        resenas: 'Muy comprensiva y profesional, la recomiendo totalmente.',
        informacionadicional: 'La Dra. Guzman se especializa en el cuidado de la salud reproductiva de las mujeres.'
      },
      { 
        nombre: 'Dr. Manuel Vargas',
        especialidad: 'Nutriología',
        ubicacion: 'Turrialba, Cartago',
        horariosconsulta: 'Lunes a Viernes, 8:00 am - 4:00 pm',
        telefono: '+506 3692-7410',
        correo: 'manuel.vargas@arboldeseda.com',
        resenas: 'Muy profesional y empático, me ayudó a mejorar mi dieta y estilo de vida.',
        informacionadicional: 'El Dr. Vargas se especializa en el diseño de planes nutricionales personalizados para mejorar la salud y el bienestar.'
      },
      { 
        nombre: 'Dra. Patricia Herrera',
        especialidad: 'Dermatología',
        ubicacion: 'San Jose centro',
        horariosconsulta: 'Lunes a Viernes, 9:00 am - 5:00 pm',
        telefono: '+506 2580-3698',
        correo: 'patricia.herrera@arboldeseda.com',
        resenas: 'Muy profesional y amable, me ayudó a tratar mi acné.',
        informacionadicional: 'La Dra. Herrera es experta en el diagnóstico y tratamiento de enfermedades de la piel.'
      },
      { 
        nombre: 'Dr. Roberto Castro',
        especialidad: 'Terapia física',
        ubicacion: 'Cervantes, Cartago',
        horariosconsulta: 'Martes y Jueves, 8:00 am - 4:00 pm',
        telefono: '+506 1478-3690',
        correo: 'roberto.castro@arboldeseda.com',
        resenas: 'Excelente terapeuta, me ayudó a recuperarme de una lesión muscular.',
        informacionadicional: 'El Dr. Castro tiene experiencia en el tratamiento de lesiones musculoesqueléticas y en la rehabilitación física.'
      },
      { 
        nombre: 'Dra. Laura Solano',
        especialidad: 'Medicina general',
        ubicacion: 'Paraiso, Cartago',
        horariosconsulta: 'Lunes a Viernes, 10:00 am - 6:00 pm',
        telefono: '+506 3698-1470',
        correo: 'laura.solano@arboldeseda.com',
        resenas: 'Muy dedicada y comprensiva, brinda una atención integral.',
        informacionadicional: 'La Dra. Solano tiene una amplia experiencia en el manejo de enfermedades comunes y el cuidado preventivo de la salud.'
      },
      { 
        nombre: 'Dr. Alberto Morales',
        especialidad: 'Nutriología',
        ubicacion: 'Tres Ríos, Cartago',
        horariosconsulta: 'Martes y Jueves, 10:00 am - 7:00 pm',
        telefono: '+506 9876-5432',
        correo: 'alberto.morales@arboldeseda.com',
        resenas: 'Muy profesional y comprometido, me ayudó a mejorar mi salud a través de la alimentación.',
        informacionadicional: 'El Dr. Morales ofrece asesoramiento nutricional personalizado para alcanzar objetivos de salud y bienestar.'
      }
  ];
  
  let currentResults = []; // Variable to store current search results
  
  // Function to perform search
  function search() {
    const searchOption = document.getElementById('searchOption').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    currentResults = doctorsData.filter(doctor => 
      doctor[searchOption].toLowerCase().includes(searchTerm)
    );
  
    displaySearchResults(currentResults);
  }
  
  // Function to display search results
  function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';
  
    if (results.length === 0) {
      searchResultsContainer.innerHTML = '<p>No se encontraron resultados.</p>';
      return;
    }
  
    results.forEach(doctor => {
      const resultElement = document.createElement('div');
      resultElement.classList.add('result');
      resultElement.innerHTML = `
        <h3>${doctor.nombre}</h3>
        <p><strong>Especialidad:</strong> ${doctor.especialidad}</p>
        <p><strong>Ubicación:</strong> ${doctor.ubicacion}</p>
        <button onclick="showDoctorDetail('${doctor.nombre}', '${doctor.especialidad}', '${doctor.ubicacion}', '${doctor.horariosconsulta}', '${doctor.telefono}', '${doctor.correo}', '${doctor.resenas}', '${doctor.informacionadicional}')">Ver Detalles</button>
      `;
      searchResultsContainer.appendChild(resultElement);
    });
  }
  
  // Function to show detailed information of a doctor in a modal
  function showDoctorDetail(nombre, especialidad, ubicacion, horariosconsulta, telefono, correo, resenas, informacionadicional) {
    const doctorDetailContainer = document.getElementById('doctorDetail');
    doctorDetailContainer.innerHTML = `
      <h2>${nombre}</h2>
      <p><strong>Especialidad:</strong> ${especialidad}</p>
      <p><strong>Ubicación:</strong> ${ubicacion}</p>
      <p><strong>Horarios de consulta:</strong> ${horariosconsulta}</p>
      <p><strong>Telefono:</strong> ${telefono}</p>
      <p><strong>Correo:</strong> ${correo}</p>
      <p><strong>Reseñas:</strong> ${resenas}</p>
      <p><strong>Información adicional:</strong> ${informacionadicional}</p>
    `;
  
    // Show the modal
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
  }
  
  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
  
  // Function to sort the search results
  function sortResults() {
    const sortOption = document.getElementById('sortOption').value;
    
    currentResults.sort((a, b) => {
      if (a[sortOption] < b[sortOption]) return -1;
      if (a[sortOption] > b[sortOption]) return 1;
      return 0;
    });
  
    displaySearchResults(currentResults);
  }
