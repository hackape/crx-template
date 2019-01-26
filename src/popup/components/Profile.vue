<template>
  <v-container fluid>
    <v-layout row align-center>
      <v-flex grow>
        <v-text-field label="Origin" single-line v-model="origin"/>
      </v-flex>
    </v-layout>
    <Record
      v-for="record in records"
      :key="record.id"
      :record="record"
      :remove="removeRecord.bind(this, record.id)"
      :setState="setRecord.bind(this, record.id)"
    />
    <v-btn v-on:click="addRecord">add one</v-btn>
    <v-btn v-on:click="resetProfile">reset</v-btn>
  </v-container>
</template>

<script>
import Record from "./Record";

function createRecord() {
  return {
    id: Date.now(),
    enabled: true,
    moduleId: "",
    filePath: ""
  };
}

function createProfile() {
  const newRecord = createRecord();
  return {
    origin: "",
    records: [newRecord]
  };
}

function saveProfile(profile) {
  if (typeof profile !== "string") {
    profile = JSON.stringify(profile);
  }
  localStorage.setItem("profile", profile);
}

export default {
  components: {
    Record
  },
  created() {
    this.profile = this.getProfile();
  },
  data() {
    return {
      profile: {}
    };
  },

  computed: {
    origin: {
      get() {
        return this.profile.origin;
      },
      set(origin) {
        this.profile = { ...this.profile, origin };
      }
    },
    records: {
      get() {
        return this.profile.records;
      },
      set(records) {
        this.profile = { ...this.profile, records };
      }
    }
  },

  methods: {
    resetProfile() {
      const newProfile = createProfile();
      saveProfile(newProfile);
      this.profile = this.getProfile();
    },
    getProfile() {
      let profile = localStorage.getItem("profile");
      try {
        if (!profile) throw Error("null error");
        profile = JSON.parse(profile);
      } catch (err) {
        const newRecord = {
          id: Date.now(),
          enabled: true,
          moduleId: "",
          filePath: ""
        };
        profile = {
          origin: "",
          records: [newRecord]
        };

        saveProfile(profile);
      }
      return profile;
    },
    addRecord() {
      const newRecord = {
        id: Date.now(),
        enabled: true,
        moduleId: "",
        filePath: ""
      };
      this.records = this.records.concat(newRecord);
    },
    removeRecord(id) {
      this.records = this.records.filter(record => record.id !== id);
    },
    setRecord(id, partial) {
      this.records = this.records.map(record => {
        if (record.id !== id) return record;
        return { ...record, ...partial };
      });
    }
  },
  watch: {
    profile: profile => {
      saveProfile(profile);
    }
  }
};
</script>

<style>
</style>
