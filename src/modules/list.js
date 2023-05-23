class Lists {
  constructor() {
    this.lists = JSON.parse(localStorage.getItem('lists')) || [];
  }

  addlist(description) {
    const task = {
      id: this.lists.length + 1,
      description,
      completed: false,
    };
    this.lists.push(task);
    localStorage.setItem('lists', JSON.stringify(this.lists));
  }

  removelist(id) {
    const index = this.lists.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.lists.splice(index, 1);

      for (let i = index; i < this.lists.length; i += 1) {
        this.lists[i].id -= 1;
      }

      localStorage.setItem('lists', JSON.stringify(this.lists));
    }
  }

  editlist(id, newDescription) {
    const taskIndex = this.lists.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.lists[taskIndex].description = newDescription;
      localStorage.setItem('lists', JSON.stringify(this.lists));
    }
  }

  completelist(id) {
    const taskIndex = this.lists.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.lists[taskIndex].completed = true;
      localStorage.setItem('lists', JSON.stringify(this.lists));
    }
  }

  uncompletelist(id) {
    const taskIndex = this.lists.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.lists[taskIndex].completed = false;
      localStorage.setItem('lists', JSON.stringify(this.lists));
    }
  }

  clearCompleted() {
    this.lists = this.lists.filter((list) => !list.completed);

    for (let i = 0; i < this.lists.length; i += 1) {
      this.lists[i].id = i + 1;
    }

    localStorage.setItem('lists', JSON.stringify(this.lists));
  }
}

export default Lists;