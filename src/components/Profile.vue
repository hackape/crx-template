<template>
  <v-container fluid>
    <Record v-for="record in records" :key="record.id" :record="record" :remove="removeRecord.bind(this, record.id)"/>
    <v-btn v-on:click="addRecord" >add one</v-btn>
  </v-container>
</template>

<script>
import Record from './Record';
export default {
  components: {
    Record
  },
  data: () => ({
    records: [
      {
        id: Date.now(),
        enabled: true,
        moduleId: 'some string',
        filePath: 'some other string'
      }
    ]
  }),
  methods: {
    addRecord() {
      const newRecord = {
        id: Date.now(),
        enabled: true,
        moduleId: '',
        filePath: ''
      }
      this.records.push(newRecord);
    },
    removeRecord(id) {
      this.records = this.records.filter(record => record.id !== id);
    }
  }
};
</script>

<style>
</style>
