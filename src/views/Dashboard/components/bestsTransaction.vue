<template lang="pug">
  .wrapper
    .title
      .col-3 ticker
      .col-3 buy
      .col-3 sale
      .col-3 perc
    .row(v-for="(item, index) in tickers", :key="index")
      .col-3.name {{item.ticker}}
      .col-3 {{trimmingNumbers(item.buy)}}
      .col-3 {{trimmingNumbers(item.sell)}}
      .col-3(:class="trimmingNumbers(item.perc) > 0 ? 'green' : 'red'") {{trimmingNumbers(item.perc)}}

</template>

<script>

export default {
  name: 'BestTransaction',
  props: {
    tickers: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    }
  },
  methods: {
    trimmingNumbers(el) {
      return el.toString().length < 4 ? el : el.toString().substr(0, el.toString().indexOf('.') + 2)
    }
  }
}

</script>

<style lang="less" scoped>

  .wrapper {
    min-width: 275px;
    min-height: 50px;
    background: rgb(46, 42, 77);
    border-radius: 6px;
    padding: 10px 0;

    .title {
      display: flex;
      flex-direction: row;
      padding: 5px 8px;
    }

    .row {
      display: flex;
      flex-direction: row;
      background: rgb(35, 32, 65);
      border-radius: 14px;
      padding: 4px 6px;
      margin: 0 10px;

      .name {
        color: white;
      }
    }

    :nth-child(odd) {
      background: transparent;
    }

    .col-3 {
      color: rgb(98, 102, 130);
      width: 33.3%;
      padding: 0 5px;
      min-width: 50px;
    }

    .green {
      color: #388e3c;
    }

    .red {
      // color: #d32f2f;
      color: #b71c1c;
    }
  }
</style>
