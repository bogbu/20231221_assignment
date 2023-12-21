<script lang="ts">
  import {createTodo} from "../../api/abc";
  let count: number = 0
  const increment = () => {
    count += 2
  }
  // createTodo();
</script>

<button on:click={increment}>
  count is {count}
</button>

