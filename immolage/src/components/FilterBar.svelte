<script lang="ts">
    import { createEventDispatcher } from "svelte";
  
    const dispatch = createEventDispatcher();
  
    let filter = "";
  
    function handleChange() {
      dispatch("filter", filter);
    }
  </script>
  
  <div class="mb-4">
    <label for="filter" class="block text-sm font-medium text-gray-700">Filter municipalities:</label>
    <input
      type="text"
      id="filter"
      name="filter"
      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      placeholder="Enter municipality name"
      bind:value={filter}
      on:input={handleChange}
    />
  </div>
  
  