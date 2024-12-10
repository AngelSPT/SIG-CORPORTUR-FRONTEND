function loader(){
    cargarRecetas();
}

async function cargarRecetas() {
    try {
        // Usamos await para esperar la respuesta de la API
        const respuesta = await axios.get('http://127.0.0.1:8000/api/recipes/');

        // Accedemos a los datos de las recetas después de que se hayan obtenido
        const recetasData = respuesta.data;

        // Construimos el HTML con los datos de las recetas
        let recetasHTML = '';
        recetasData.forEach(receta => {
            recetasHTML += `
                <div class="card" style="cursor: pointer;">
        <div class="card-body d-flex justify-content-between">
          <div class="producto d-flex" style="margin-top: 2%; margin-left: 3%; ">
            <div class="img-producto" style="width: 155px; height: 120px; border-radius: 10px;">
              <img src="${receta.image}" alt="" style="width: 100%; height: 100%; border-radius: 10px;">
            </div>
            <div class="info" style="margin-left: 3%;">
              <h4><b>${receta.name}</b></h4>
              <p style="font-size: 12px;">${receta.description}</p>
            </div>
          </div>
        </div>
      </div>
            `;
        });

        // Insertamos el HTML generado en el elemento con el id 'lasrecetas'
        document.getElementById('lasrecetas').innerHTML = recetasHTML;
    } catch (error) {
        console.error('Error al cargar las recetas:', error);
    }
}