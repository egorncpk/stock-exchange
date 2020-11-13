<template lang="pug">
  .container
    transaction-day(:bestTransaction="transactions[0]")
    .content
      bests-transaction(:tickers="transactions")
      chart
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
      transactions: []
    }
  },
  mounted() {
    getInfo().then(({ data }) => {
      console.log(JSON.parse(data))
      this.transactions = JSON.parse(data)
    }).catch((data) => {
      console.log(data)
    })
  }
}

</script>

<style lang="less" scoped>

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 1 100%;
  margin: 0 auto;

  .content {
    display: flex;
    flex-direction: row;
    height: 100%;
    padding: 15px;
  }
}

</style>
