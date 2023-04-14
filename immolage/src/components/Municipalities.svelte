<script>
    import { onMount } from 'svelte';
    import { supabase } from '$lib/supabaseClient';
    import FilterBar from './FilterBar.svelte';
    import MunicipalityCard from './MunicipalityCard.svelte';
  
    let municipalities = [];
    let filteredMunicipalities = [];
    let filterText = '';
  
    onMount(async () => {
  const { data, error } = await supabase.from('municipalities').select('*');
  if (error) {
    console.error('Error fetching data:', error);
  } else {
    municipalities = data;
    filteredMunicipalities = [...municipalities];
  }
});
  
    $: {
      filteredMunicipalities = municipalities.filter((municipality) =>
        municipality.name.toLowerCase().includes(filterText.toLowerCase())
      );
    }
  </script>
  
  <div>
    <FilterBar bind:filterText={filterText} />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each filteredMunicipalities as municipality}
        <MunicipalityCard {municipality} />
      {/each}
    </div>
  </div>
  