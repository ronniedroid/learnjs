var app = new Vue({
  el: "#app",
  data: {
    message: "Big bucket",
  },
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "You loaded this page on " + new Date().toLocaleString(),
  },
});

var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true,
  },
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    seen: true,
    name: "todo",
    todos: [],
  },
  methods: {
    addTodo: function () {
      this.todos.push(todo);
    },
  },
});
