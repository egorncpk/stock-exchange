<template lang="pug">
  .container
    transaction-day(v-if="transactions.length", :bestTransaction="transactions[0]")
    .content(v-if="transactions.length")
      bests-transaction(:tickers="transactions", @activeTicket="changeTicker")
      chart(:ticker="chartTicker")
</template>

<script>
import transactionDay from './components/transactionDay'
import bestsTransaction from './components/bestsTransaction'
import chart from './components/chart'
import { getInfo } from '@/api/data'

export default {
  name: 'Dashboard',
  components: {
    transactionDay,
    bestsTransaction,
    chart
  },
  data() {
    return {
      transactions: [],
      chartTicker: ''
    }
  },
  mounted() {
    getInfo().then(({ data }) => {
      this.transactions = JSON.parse(data)
      this.chartTicker = this.transactions[0].ticker
    }).catch((data) => {
      console.log(data)
    })
  },
  methods: {
    changeTicker(e) {
      this.chartTicker = e.ticker
    }
  }
}

</script>

<style lang="less" scoped>

@import '../../styles/variables';

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 1 100%;
  margin: 0 auto;

  .content {
    display: flex;
    flex-direction: row;
    height: calc(100% - @transition-day);
    padding: 15px;
  }
}

</style>
