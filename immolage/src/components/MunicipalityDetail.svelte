<script>
    /**
	 * @type {{ geo_name: any; canton_name: any; population: any; }}
	 */
     export let municipality;
  </script>
  
  <div class="p-4">
    <h2 class="text-xl font-semibold">{municipality.geo_name}</h2>
    <p>Canton: {municipality.canton_name}</p>
    <p>Population: {municipality.population}</p>
    <!-- Add more fields as needed -->
  </div>
  