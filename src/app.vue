<template>
    <div>
        <index-component></index-component>
    </div>
</template>
<script>
    import Index from './views/index';
    export default {
      components: {
        'index-component': Index
      },
    };
</script>