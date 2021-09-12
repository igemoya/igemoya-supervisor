<script lang="ts">
  export let theme: string;
  export let view: number;
</script>

<div>
  <span class="w700 rankObject">{theme}</span>
  <span class="w400">{view}</span>
</div>

<style>
  div {
    font-size: 2.3vh;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .rankObject {
    margin-top: 1vh;
  }
</style>