<template>
  <div>
    <div class="field">
      <label class="label">Course Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Course Name"
          v-model="courseName"
        />
      </div>
    </div>
 
    <div class="field">
      <label class="label">Fee</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Fee"
          v-model="courseFee"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Specialization</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Specialization"
          v-model="courseSplztn"
        />
      </div>
    </div>    
    <div class="control">
      <button class="button is-success" @click="saveCourse">SAVE</button>
    </div>
    <br/><br/>
      <router-link :to="{ name: 'Index' }" class="button is-success mt-5">Back</router-link>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddCourse",
  data() {
    return {
      courseName: "",
      courseFee: "",
      courseSplztn: ""
    };
  },
  methods: {
    // Create New course
    async saveCourse() {
      try {
        await axios.post("http://localhost:5000/api/v1/courses/create", {
          course_name: this.courseName,
          course_splztn: this.courseSplztn,
          course_fee: this.courseFee,
        });
        this.courseName = "";
        this.courseSplztn = "";
        this.courseFee = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>