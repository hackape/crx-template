<template>
  <v-form>
    <v-layout row align-center>
      <v-flex grow>
        <v-layout row>
          <v-flex sm5 xs5>
            <v-layout row>
              <v-flex shrink>
                <v-checkbox v-model="enabled"/>
              </v-flex>
              <v-flex grow>
                <v-text-field label="Module Id" single-line v-model="moduleId" :disabled="!enabled"></v-text-field>
              </v-flex>
              <v-flex shrink>&nbsp;&nbsp;&nbsp;&nbsp;</v-flex>
            </v-layout>
          </v-flex>
          <v-flex sm7 xs7>
            <v-text-field label="File Path" single-line v-model="filePath" :disabled="!enabled"></v-text-field>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex shrink>
        <v-btn flat icon v-on:click="remove">
          <v-icon>close</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
export default {
  props: ["record", "remove", "setState"],
  computed: {
    enabled: {
      get() {
        return this.record.enabled;
      },
      set(enabled) {
        this.setState({ enabled });
      }
    },
    moduleId: {
      get() {
        return this.record.moduleId;
      },
      set(moduleId) {
        this.setState({ moduleId });
      }
    },
    filePath: {
      get() {
        return this.record.filePath;
      },
      set(filePath) {
        this.setState({ filePath });
      }
    }
  }
};
</script>

<style>
</style>
