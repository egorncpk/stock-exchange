<template lang="pug">
  .chart-wrapper
    .title
      .title--name {{ticker}}
      .title--range
        .button(v-for="(item, index) in range", :key="index", :class="activeRange === item.id ? 'active' : ''", @click="clickRange(item)") {{item.name}}
    .graph
      canvas(id="stock-schedule", :key="ticker + activeRange")
</template>

<script>
import { getData } from '../../../api/chart'
import Chart from 'chart.js'
import { getDateTime, subtractDateTime, formatDate } from '../../../utils'

// Точность абсолютная/динамика (MAPE), Точность сделок и Точность открытия/закрытия

export default {
  name: 'Chart',
  props: {
    ticker: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {
      loading: false,
      range: [
        { id: 1, type: 'days', name: '1д', value: 0 },
        { id: 2, type: 'days', name: '2д', value: 1 },
        { id: 3, type: 'days', name: '3д', value: 2 },
        { id: 4, type: 'days', name: '5д', value: 4 },
        { id: 5, type: 'days', name: '7д', value: 6 },
        { id: 6, type: 'days', name: '14д', value: 13 }
      ],
      activeRange: 1
    }
  },
  computed: {
    startDate() {
      return formatDate(subtractDateTime(this.range[this.activeRange - 1].type, this.range[this.activeRange - 1].value), 'YYYY-MM-DD')
    },
    endDate() {
      return getDateTime('YYYY-MM-DD')
    }
  },
  watch: {
    ticker() {
      this.getDataFromTicker()
    }
  },
  mounted() {
    this.getDataFromTicker()
  },
  methods: {
    createChart(date = [], predict = [], fact = [], buy = [], sale = []) {
      new Chart(document.getElementById('stock-schedule'), {
        type: 'line',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: 'Факт',
              borderColor: 'rgba(255, 56, 96, 0.5)',
              backgroundColor: 'rgba(255, 56, 96, 0.1)',
              data: fact,
              borderWidth: 1,
              pointRadius: 1
            },
            {
              label: 'Прогноз',
              borderColor: 'rgba(50, 115, 220, 0.5)',
              backgroundColor: 'rgba(50, 115, 220, 0.1)',
              data: predict,
              borderWidth: 1,
              pointRadius: 1
            },
            {
              label: 'Покупка',
              borderColor: 'rgb(255,255,255)',
              backgroundColor: 'rgba(255, 255, 96, 0.1)',
              data: buy,
              borderWidth: 1,
              pointRadius: 1,
              hidden: true
            },
            {
              label: 'Продажа',
              borderColor: 'rgb(255,255,255)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              data: sale,
              borderWidth: 1,
              pointRadius: 1,
              hidden: true
            }
          ]
        },
        options: {
          scales: {
            xAxes: [{
              type: 'category',
              labels: date
            }]
          }
        }
      })
    },
    clickRange(elem) {
      this.activeRange = elem.id
      this.getDataFromTicker()
    },
    getDataFromTicker() {
      /*
        Close - факт за прошлый день
        Predict - прогноз на этот день
        Pmin - линия покупки
        Pmax - линия продажи
      */
      this.loading = true
      getData({ ticker: this.ticker, from: this.startDate, to: this.endDate }).then(({ data }) => {
        const arrDate = []
        data[0].date.forEach(item => arrDate.push(formatDate(item / 1000000, 'DD-MMM hh:mm')))
        this.createChart(arrDate, data[0].predict, data[0].fact, data[0].pmin, data[0].pmax)
        this.loading = false
      })
    }
  }
}

</script>

<style lang="less" scoped>

  @import '../../../styles/variables';
  @chart-bcg: rgb(46, 42, 77);

  .chart-wrapper {
    margin-left: 15px;
    background: rgb(46, 42, 77);
    width: 100%;
    border-radius: 6px;

    .title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 15px;
      color: white;
      line-height: 26px;

      &--name {
        font-size: 1.6em;
      }

      &--range {
        display: flex;
        flex-direction: row;
        background-color: darken(@chart-bcg, 10%);
        font-size: 1.2em;
        line-height: 26px;
        border-radius: 13px;
        padding: 0 6px;

        .button {
          cursor: pointer;
          border-radius: 13px;
          padding: 0 6px;

          &:hover {
            background: lighten(@chart-bcg, 10%);
          }
        }

        .active {
          background: @chart-bcg;
        }
      }
    }
  }
</style>
