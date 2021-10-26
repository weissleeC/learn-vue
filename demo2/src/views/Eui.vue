<template>
  <div class="eui">
    <div style="margin-bottom: 20px;">
      <el-button type="primary" @click="dialogVisible = true">添加</el-button>
    </div>

    <el-table :data="studentList" style="max-width: 1200px; margin: 0 auto;">
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column label="编辑">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" icon="el-icon-delete" @click="deleteStudent(scope.row.id)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="添加学生" :visible.sync="dialogVisible">
      <el-form @submit.prevent="fromData" label-width="80px">
        <el-form-item label="ID">
          <el-input v-model.number="fromData.id"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="fromData.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model.number="fromData.age"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addStudent">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Eui',
  data() {
    return {
      studentList: [],
      dialogVisible: false,
      fromData: {
        id: '',
        name: '',
        age: ''
      }
    }
  },
  methods: {
    getStudentList() {
      axios.get('http://localhost:3030/student').then(res => {
        this.studentList = res.data
      })
    },
    deleteStudent(id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios.delete(`http://localhost:3030/student/${id}`).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.getStudentList();
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    addStudent() {
      axios.post('http://localhost:3030/student', {student: this.fromData}).then(() => {
        this.$message({
          message: '添加成功',
          type: 'success'
        });
        this.getStudentList();
        this.dialogVisible = false;
      })
    }
  },
  created() {
    this.getStudentList();
  }
}
</script>
