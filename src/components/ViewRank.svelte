<script lang="ts">
  export let exhibition: string;
  export let item: string;
  export let object: string;
  export let view: number;
</script>

<div>
  <span class="w900 rankObject">
    {exhibition}
    <span class="w700">
      -
      <span class="w600">
        {item}
        <span class="w400">
          -
          <span class="w300">
            {object}
          </span>
        </span>
      </span>
    </span>
  </span>
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