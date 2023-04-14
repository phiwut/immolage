<script lang="ts">
  export let municipality = {};
</script>

<div class="rounded overflow-hidden shadow-lg p-4 bg-white">
  <h2 class="font-bold text-xl mb-2">{municipality.name}</h2>
  <div class="text-gray-700">
    <p>Municipality code: {municipality.municipality_code}</p>
    <p>Canton: {municipality.canton_name}</p>
  </div>
</div>
