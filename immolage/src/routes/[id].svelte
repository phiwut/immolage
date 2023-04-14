<script>
    import MunicipalityDetail from '$lib/MunicipalityDetail.svelte';
    /**
	 * @type {any}
	 */
     export let municipality;
  </script>
  
  <main>
    <MunicipalityDetail {municipality} />
  </main>
  