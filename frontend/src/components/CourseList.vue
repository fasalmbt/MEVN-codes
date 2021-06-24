<template>
  <div>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Course Name</th>
          <th>Fee</th>
          <th>Specialization</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.course_id">
          <td>{{ item.course_name }}</td>
          <td>{{ item.course_fee }}</td>
          <td>{{ item.course_splztn }}</td>
          <td class="has-text-centered">
            <a
              class="button is-danger is-small"
              @click="deleteCourse(item.course_id)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
    <router-link :to="{ name: 'Create' }" class="button is-success mt-5">Add new course</router-link>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "CourseList",
  data() {
    return {
      items: [],
    };
  },
 
  created() {
    this.getCourses();
  },
 
  methods: {
    // Get All Courses
    async getCourses() {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/courses/all");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete course 
    async deleteCourse(id) {
      try {
        await axios.delete(`http://localhost:5000/api/v1/courses/delete/${id}`);
        this.getCourses();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>