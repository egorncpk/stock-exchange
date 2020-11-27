<template lang="pug">
  .transaction-day
    .recommendation-text Рекомендация к покупке:
    .groupe(v-if="isEmptyObj(bestTransaction)", v-for='type in names', :key="type.id")
      .name {{type.name}}
      .value {{trim(bestTransaction[type.value])}}

</template>

<script>
import { trimmingNumbers } from '../../../utils'

export default {
  name: 'TransactionDay',
  props: {
    bestTransaction: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      names: [
        { id: '0', value: 'ticker', name: 'Акции:' },
        { id: '1', value: 'buy', name: 'Покупка:' },
        { id: '2', value: 'sell', name: 'Продажа:' },
        { id: '3', value: 'perc', name: 'Прибыль:' },
        { id: '4', value: 'stop-lose', name: 'Стоп цена:' }
      ],
      values: ['ticker', 'buy', 'sell', 'perc']
    }
  },
  watch: {
    bestTransaction(e) {
      this.bestTransaction = e
    }
  },
  methods: {
    isEmptyObj(obj) {
      return Object.keys(obj).length
    },
    trim(e) {
      return e && typeof e !== 'string' ? trimmingNumbers(e) : e
    }
  }
}

</script>

<style lang="less" scoped>

  @import '../../../styles/variables';

  .transaction-day {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    height: @transition-day;
    width: 100%;
    padding: 15px 15px 0;

    .recommendation-text {
      color: #fff;
      font-size: 1.2em;
      margin-right: 15px;
    }

    .groupe {
      display: flex;
      flex-direction: row;
      font-size: 1.2em;

      &:not(:last-child) {
        margin-right: 15px;
      }

      .name {
        // width: 40px;
        color: rgb(98, 102, 130);
      }

      .value {
        color: #fff;
        margin-left: 8px;
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
