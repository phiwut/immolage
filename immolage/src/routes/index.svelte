<script>
    import Municipalities from "$lib/Municipalities.svelte";
  </script>
  
  <main class="container mx-auto px-4 mt-12">
    <h1 class="text-4xl font-bold mb-8">Swiss Municipalities</h1>
    <Municipalities />
  </main>
  
  <style>
    /* You can add global styles here or in app.postcss */
    main {
      min-height: calc(100vh - 64px);
    }
  </style>
  