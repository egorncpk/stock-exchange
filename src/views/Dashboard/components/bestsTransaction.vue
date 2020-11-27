<template lang="pug">
  .wrapper
    .title
      .cell.cell--5 Акции
      .cell.cell--3 Покупка
      .cell.cell--3 Продажа
      .cell.cell--1 %
    .shares(ref="scroll")
      .row(v-for="(item, index) in tickers", :key="index", @click="activeTicker(item, index)", :class="index === activeRow ? 'active' : ''")
        .cell.cell--5.name {{item.ticker}}
        .cell.cell--3 {{trim(item.buy)}}
        .cell.cell--3 {{trim(item.sell)}}
        .cell.cell--1(:class="trim(item.perc) > 0 ? 'green' : 'red'") {{trim(item.perc)}}

</template>

<script>
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import { trimmingNumbers } from '../../../utils'

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
      ps: {},
      activeRow: 0
    }
  },
  watch: {
    tickers() {
      this.ps.update()
    }
  },
  mounted() {
    this.ps = new PerfectScrollbar(this.$refs.scroll, {
      wheelSpeed: 1,
      wheelPropagation: true,
      minScrollbarLength: 50
    })
  },
  methods: {
    trim(el) {
      return trimmingNumbers(el)
    },
    activeTicker(e, index) {
      this.activeRow = index
      this.$emit('activeTicket', e)
    }
  }
}

</script>

<style lang="less" scoped>

  .wrapper {
    min-width: 340px;
    min-height: 50px;
    background: rgb(46, 42, 77);
    border-radius: 6px;
    padding: 10px 0;
    font-size: 1.1em;

    .title {
      display: flex;
      flex-direction: row;
      padding: 5px 10px;
    }

    .shares {
      position: relative;
      flex: 1 1 100%;
      width: 100%;
      height: calc(100% - 30px);
      overflow: hidden;
    }
    .row {
      display: flex;
      flex-direction: row;
      height: 30px;
      background: rgb(35, 32, 65);
      border-radius: 15px;
      padding: 4px 6px;
      margin: 0 10px;

      .name {
        color: white;
        overflow: hidden; /* Обрезаем содержимое */
        text-overflow: ellipsis; /* Многоточие */
      }

      &:hover {
        cursor: pointer;
        background: rgb(69, 65, 100);
      }

    }

    .cell {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: rgb(98, 102, 130);
      padding: 0 5px;
      min-width: 65px;

      &--6 {
        width: (percentage(6/12));
      }

      &--5 {
        width: (percentage(5/12));
      }

      &--4 {
        width: (percentage(4/12));
      }

      &--3 {
        width: (percentage(3/12));
      }

      &--2 {
        width: (percentage(2/12));
      }

      &--1 {
        width: (percentage(1/12));;
      }
    }

    :nth-child(even) {
      background: transparent;
    }

    .active {
      background: lighten(rgb(69, 65, 100), 5%);
    }

    .green {
      color: #388e3c;
    }

    .red {
      color: #b71c1c;
    }
  }
</style>
