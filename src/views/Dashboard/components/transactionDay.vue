<template lang="pug">
  .transaction-day
    //- .header
      .col__head(v-for='type in names', :key="type.id") {{type.name}}
    //- .content
      .col__cell(v-for='item in values', :key="index") {{data[item]}}

    .groupe(v-for='type in names', :key="type.id")
      .name {{type.name}}:
      .value {{data[type]}}

</template>

<script>

export default {
  name: 'TransactionDay',
  data() {
    return {
      names: [
        { id: '0', name: 'Type' },
        { id: '1', name: 'Buy' },
        { id: '2', name: 'Sell' },
        { id: '3', name: '↑' },
        { id: '4', name: '↓' }
      ],
      values: ['ticker', 'buy', 'sell', 'perc'],
      data: {
        'ticker': 'TSLA',
        'buy': 381.066893232,
        'sell': 380.5764298082,
        'perc': -0.1288738307
      }
    }
  }
}

</script>

<style lang="less" scoped>

  .transaction-day {
    display: flex;
    align-items: center;
    flex-direction: row;
    min-height: 50px;
    width: 100%;
    padding: 15px;

    .groupe {
      display: flex;
      flex-direction: row;

      .name {
        width: 40px;
        color: rgb(98, 102, 130);
      }

      .value {
        color: #fff;
      }

    }

    .header {
      display: flex;
      flex-direction: row;
      color: rgb(98, 102, 130);
    }

    .content {
      display: flex;
      flex-direction: row;
      color: #fff;
    }
  }

  .col {
    &__head {
      padding: 0 5px;
      min-width: 40px;
      font-size: 12px;
    }

    &__cell {
      padding: 0 5px;
      min-width: 40px;
    }
  }

</style>
